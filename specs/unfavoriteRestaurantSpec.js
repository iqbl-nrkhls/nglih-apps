import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

import * as testFactories from './helpers/testFactories';

describe('Unfavorite A Restaurant', () => {
  beforeEach(async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 'abc' });
    await testFactories.createFavoriteButtonPresenterWithNotification({ id: 'abc' });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('abc');
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display favorite widget when the restaurant has been favorited', async () => {
    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('abc');

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
