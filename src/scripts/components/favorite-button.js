import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteButtonTemplate, createUnfavoriteButtonTemplate } from '../views/templates/favorite-button-template';
import showNotification from '../utils/show-notification';

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
  }

  async renderButton() {
    if (await this.isRestaurantExist()) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  async isRestaurantExist() {
    const { id } = this._restaurant;
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderLike() {
    this.innerHTML = createFavoriteButtonTemplate();

    this.querySelector('#favoriteButton').addEventListener('click', async () => {
      try {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
        showNotification({
          message: 'Restaurant has been successfully added to the favorite list',
          color: 'green',
        });
      } catch (error) {
        showNotification({
          message: error,
          color: 'red',
        });
      }
      this.renderButton();
    });
  }

  _renderLiked() {
    this.innerHTML = createUnfavoriteButtonTemplate();

    this.querySelector('#favoriteButton').addEventListener('click', async () => {
      try {
        await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
        showNotification({
          message: 'Restaurant has been successfully removed from the favorites list',
          color: 'green',
        });
      } catch (error) {
        showNotification({
          message: error,
          color: 'red',
        });
      }
      this.renderButton();
    });
  }

  async setData(restaurant) {
    this._restaurant = restaurant;
    await this.renderButton();
  }
}

export default FavoriteButton;
