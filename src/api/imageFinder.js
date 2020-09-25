import axios from 'axios';
import { config } from '../config/config';

export const getImages = (searchString, page) => axios.get(config.apiLink, {
  params: {
    q: searchString,
    page: page,
    key: config.apiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: config.perPage,
  }
}).then((response) => response.data);