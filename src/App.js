import React, { Component } from 'react';
import './App.css';
import { getImages } from './api/imageFinder';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoadMoreButton from './components/LoadMoreButton';
import { config } from './config/config';
import LoaderComponent from './components/LoaderComponent';

class App extends Component {
  state = {
    searchText: '',
    images: [],
    totalPages: 0,
    showModal: false,
    selectedImage: {},
    currentPage: 1,
    isLoading: false,
  }

  handleSearchFormSubmit = async(searchText) => {
    let images = [];

    this.setState({ isLoading: true });

    if (searchText) {
      images = await getImages(searchText, this.state.currentPage);
    }

    this.setState({
      searchText,
      images: [...images.hits],
      totalPages: Math.ceil(images.totalHits / config.perPage),
      currentPage: 1,
      isLoading: false,
    });
  }

  handleSelectImage = (id) => {
    const selectedImage = this.state.images.find((image) => image.id === id);

    this.setState({
      showModal: true,
      selectedImage,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedImage: {},
    });
  }

  handleLoadMore = async() => {
    this.setState({ isLoading: true });

    const images = await getImages(this.state.searchText, this.state.currentPage + 1);

    this.setState((state) => {
      return {
        images: [...state.images, ...images.hits],
        currentPage: state.currentPage + 1,
        isLoading: false,
      }
    });
  }

  loadMoreSection = () => {
    if (this.state.isLoading) {
      return <LoaderComponent />;
    } else if (this.state.images.length > 0 && this.state.totalPages > this.state.currentPage) {
      return <LoadMoreButton onLoadMore={this.handleLoadMore} />;
    }
  }

  getSnapshotBeforeUpdate() {
    return document.documentElement.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.images.length > 0) {
      window.scrollTo({
        top: snapshot,
        behavior: 'instant',
      });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar
          onSearchFormSubmit={this.handleSearchFormSubmit}
        />

        <ImageGallery
          images={this.state.images}
          onSelectImage={this.handleSelectImage}
        />

        { this.loadMoreSection() }

        {this.state.showModal && (
          <Modal onClose={this.handleCloseModal}>
            <img src={this.state.selectedImage.largeImageURL} alt={this.state.selectedImage.tags} />
          </Modal>
        )}
      </div>
    )
  }
}

export default App;
