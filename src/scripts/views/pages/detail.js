import RestaurantDBSource from '../../data/restaurant-db-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createRestaurantDetailLoading } from '../templates/restaurant-detail-template';

import ComponentInitiator from '../../utils/component-initiator';
import FormAddReviewInitiator from '../../utils/form-add-review-initiator';

import FavoriteButton from '../../components/favorite-button';

const Detail = {
  async render() {
    return createRestaurantDetailLoading();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    await ComponentInitiator.init({
      tagName: 'favorite-button',
      component: FavoriteButton,
      data: restaurant,
    });

    const form = document.querySelector('#review_form');
    const FormAddReview = new FormAddReviewInitiator({
      form,
      restaurantId: restaurant.id,
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const status = await FormAddReview.send();
      if (status.success) {
        // fungsi afterRender() berjalan tapi
        // customer review tidak mau pakai data yang terbaru
        this.afterRender();
      }
    });
  },
};

export default Detail;
