import CONFIG from '../../globals/config';
import characterLimitation from '../../utils/character-limitation';
import ratingStarCreator from '../../utils/rating-star-creator';

const createRestaurantItemTemplate = (restaurant) => {
  const ratings = ratingStarCreator(restaurant.rating);
  const description = characterLimitation({
    text: restaurant.description,
    limit: 250,
  });

  return `
  <article class="restaurant">
    <p class="restaurant__city">Kota. ${restaurant.city}</p>
    <div class="restaurant__cover">
      <picture>
          <source type="image/jpg" data-srcset="${CONFIG.BASE_IMAGE_URL.SMALL + restaurant.pictureId}" media="(max-width: 600px)">
          <source type="image/jpg" data-srcset="${CONFIG.BASE_IMAGE_URL.MEDIUM + restaurant.pictureId}" media="(min-width: 600px)">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      </picture>
    </div>
    <div class="restaurant__content">
      <div class="restaurant__rating">
        <p>Rating : ${ratings} ${restaurant.rating}</p>
      </div>
      <h1 class="restaurant__title">${restaurant.name}</h1>
      <p class="restaurant__desc">${description}</p>
      <a class="button" href="#/detail/${restaurant.id}">Detail Restaurant</a>
    </div>
  </article>
  `;
};

const createRestaurantItemLoading = ({ headingText }) => `
<hero-container></hero-container>

<div class="wrapper">
  <excellence-container></excellence-container>

  <section id="content" class="explore">
    <h1 class="explore__label">${headingText}</h1>
    <section class="restaurants">
      <article class="restaurant">
        <div class="restaurant__cover loading"></div>
        <div class="restaurant__content">
          <span class="loading width-s"></span>
          <span class="loading height-l"></span>
          <span class="loading"></span>
          <span class="loading width-m"></span>
        </div>
      </article>
      <article class="restaurant">
        <div class="restaurant__cover loading"></div>
        <div class="restaurant__content">
          <span class="loading width-s"></span>
          <span class="loading height-l"></span>
          <span class="loading"></span>
          <span class="loading width-m"></span>
        </div>
      </article>
      <article class="restaurant">
        <div class="restaurant__cover loading"></div>
        <div class="restaurant__content">
          <span class="loading width-s"></span>
          <span class="loading height-l"></span>
          <span class="loading"></span>
          <span class="loading width-m"></span>
        </div>
      </article>
    </section>
  </section>
</div>
`;

const createNoFavoritedRestaurants = () => `
  <p class="explore__message restaurant-not__found">
    Sorry, there are no favorited restaurants <br/>
    <a class="button" href="#/">explore now</a>
  </p>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantItemLoading,
  createNoFavoritedRestaurants,
};
