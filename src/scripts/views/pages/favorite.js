import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createRestaurantItemLoading, createNoFavoritedRestaurants } from '../templates/restaurant-item-template';

import ComponentInitiator from '../../utils/component-initiator';

import Hero from '../../components/hero';
import Excellence from '../../components/excellence';

const Favorite = {
  async render() {
    return createRestaurantItemLoading({
      headingText: 'Restaurant Favorite',
    });
  },

  async afterRender() {
    ComponentInitiator.init({
      tagName: 'hero-container',
      component: Hero,
    });

    ComponentInitiator.init({
      tagName: 'excellence-container',
      component: Excellence,
    });

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants');
    if (restaurants.length > 0) {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = createNoFavoritedRestaurants();
    }
  },
};

export default Favorite;
