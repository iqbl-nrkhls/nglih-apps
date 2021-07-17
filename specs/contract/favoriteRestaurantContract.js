const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'abc' });
    favoriteRestaurant.putRestaurant({ id: 'bca' });

    expect(await favoriteRestaurant.getRestaurant('abc'))
      .toEqual({ id: 'abc' });
    expect(await favoriteRestaurant.getRestaurant('bca'))
      .toEqual({ id: 'bca' });
    expect(await favoriteRestaurant.getRestaurant())
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct type data', async () => {
    favoriteRestaurant.putRestaurant(12);
    favoriteRestaurant.putRestaurant('abc');

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'abc' });
    favoriteRestaurant.putRestaurant({ id: 'bca' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'abc' },
        { id: 'bca' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 'abc' });
    favoriteRestaurant.putRestaurant({ id: 'bca' });
    favoriteRestaurant.putRestaurant({ id: 'cab' });

    await favoriteRestaurant.deleteRestaurant('abc');

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'bca' },
        { id: 'cab' },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'abc' });
    favoriteRestaurant.putRestaurant({ id: 'bca' });
    favoriteRestaurant.putRestaurant({ id: 'cab' });

    await favoriteRestaurant.deleteRestaurant('def');

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'abc' },
        { id: 'bca' },
        { id: 'cab' },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
