import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

import * as testFactories from './helpers/testFactories';

describe('Favorite A Restaurant', () => {
  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await testFactories.createFavoriteButtonPresenterWithNotification({ id: 'abc' });

    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await testFactories.createFavoriteButtonPresenterWithNotification({ id: 'abc' });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await testFactories.createFavoriteButtonPresenterWithNotification({ id: 'abc' });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('abc');

    expect(restaurant).toEqual({ id: 'abc' });

    FavoriteRestaurantIdb.deleteRestaurant('abc');
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await testFactories.createFavoriteButtonPresenterWithNotification({ id: 'abc' });

    await FavoriteRestaurantIdb.putRestaurant({ id: 'abc' });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    expect(restaurants).toEqual([{ id: 'abc' }]);

    FavoriteRestaurantIdb.deleteRestaurant('abc');
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createFavoriteButtonPresenterWithNotification({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
