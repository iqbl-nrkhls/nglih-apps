import API_ENDPOINT from '../globals/api-endpoint';
import showNotif from '../utils/show-notification';

class RestaurantDBSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST).catch((error) => {
      showNotif({
        message: error,
        color: 'red',
      });
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id)).catch((error) => {
      showNotif({
        message: error,
        color: 'red',
      });
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDBSource;
