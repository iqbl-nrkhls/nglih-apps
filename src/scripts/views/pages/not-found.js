import { create404NotFound } from '../templates/404-not-found-template';

const NotFound = {
  async render() {
    return create404NotFound();
  },

  async afterRender() {
    // kosong
  },
};

export default NotFound;
