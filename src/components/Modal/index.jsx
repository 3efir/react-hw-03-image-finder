
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Modal extends Component {
  handleCloseModal = (e) => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  render() {
    return <div className="Overlay" onClick={this.props.onClose}>
      <div className="Modal">
        {this.props.children}
      </div>
    </div>;
  }
}

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
