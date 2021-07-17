import RestaurantDBSource from '../../data/restaurant-db-source';
import { createRestaurantItemTemplate, createRestaurantItemLoading } from '../templates/restaurant-item-template';

import ComponentInitiator from '../../utils/component-initiator';

import Hero from '../../components/hero';
import Excellence from '../../components/excellence';

const Home = {
  async render() {
    return createRestaurantItemLoading({
      headingText: 'Explore Restaurant',
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

    const restaurants = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
