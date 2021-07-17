const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('Sorry, there are no favorited restaurants', '.restaurant-not__found');
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.see('Sorry, there are no favorited restaurants', '.restaurant-not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__content a');
  const firstRestaurantName = await I.grabTextFrom(locate('.restaurant__title').first());
  I.click(locate('.restaurant__content a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('unfavorite the restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__content a');
  const firstRestaurantName = await I.grabTextFrom(locate('.restaurant__title').first());
  I.click(locate('.restaurant__content a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  const favoritedRestaurantContainer = locate('.restaurant').withText(firstRestaurantName);
  const favoritedRestaurantButton = locate('.restaurant__content a').inside(favoritedRestaurantContainer);
  I.click(favoritedRestaurantButton);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Sorry, there are no favorited restaurants', '.restaurant-not__found');
});
