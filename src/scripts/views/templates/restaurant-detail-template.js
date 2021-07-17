import CONFIG from '../../globals/config';
import ratingStarCreator from '../../utils/rating-star-creator';

const createRestaurantDetailTemplate = (restaurant) => {
  const ratings = ratingStarCreator(restaurant.rating);

  return `
  <div class="wrapper">
    <article class="restaurant">
      <div class="restaurant__info l-flex">

        <div class="restaurant__cover">
          <picture>
            <source type="image/jpg" data-srcset="${CONFIG.BASE_IMAGE_URL.SMALL + restaurant.pictureId}" media="(max-width: 600px)">
            <source type="image/jpg" data-srcset="${CONFIG.BASE_IMAGE_URL.MEDIUM + restaurant.pictureId}" media="(max-width: 800px)">
            <source type="image/jpg" data-srcset="${CONFIG.BASE_IMAGE_URL.LARGE + restaurant.pictureId}" media="(min-width: 800px)">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
          </picture>
          <p class="restaurant__city">Kota. ${restaurant.city}</p>
        </div>

        <div class="restaurant__content">
          <div class="restaurant__rating">
            <p>Rating : ${ratings} ${restaurant.rating}</p>
          </div>

          <h1 class="restaurant__title">${restaurant.name}</h1>

          <section class='restaurant__address'>
            <p>address</p>
            <strong>${restaurant.address}</strong>
          </section>

          <section class='restaurant__category'>
            <p>Category</p>
            <div>
              ${restaurant.categories.map((category) => `<span>${category.name}</span>`).join('')}
            </div>
          </section>

          <favorite-button></favorite-button>
          
          <br><br>
          <p class="red">Description</p>
          <p class="restaurant__desc">${restaurant.description}</p>

        </div>
      </div>

      <section class="restaurant__menus">
        <h2>Menus</h2>
        <div class="l-flex">
          <section class="restaurant__foods">
            <h3>Foods</h3>
            <ul class="list__foods">
              ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </section>

          <section class="restaurant__drinks">
            <h3>Drinks</h3>
            <ul class="list__dringks">
              ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
          </section>
        </div>
      </section>

      <section class="restaurant__customer_review">
        <h2>Customer Review</h2>
        <section class="list__customer_review">
          <ul class="llist__customer_review">
            ${restaurant.customerReviews.map((review) => `
                <li>
                  <div class="review_header">
                    <p class="reviewer">${review.name}</p>
                    <p class="review_date">${review.date}</p>
                  </div>
                  <p class="review">${review.review}</p>
                </li>
              `).join('')}
          </ul>
        </section>
      </section>

      <setion class="restaurant__new_review">
        <h2>Add New Review</h2>
        <form id="review_form">
          <label for="reviewer_name">Your Name</label><br>
          <input type="text" id="reviewer_name" name="name"/>
          <br><br>
          <label for="review_content">Review</label><br>
          <textarea id="review_content" name="review"></textarea>
          <br><br>
          <input type="submit" value="Send Review" class="button"/>
        </form>
      </section>

    </article>
  </div>
  `;
};

const createRestaurantDetailLoading = () => `
<div id="detail">
  <div class="wrapper">
    <article class="restaurant">
      <div class="restaurant__info l-flex">

        <div class="restaurant__cover loading">
        </div>

        <div class="restaurant__content">
          <br><br>
          <span class="loading width-s"></span>
          <span class="loading width-m height-l"></span>
          <span class="loading width-s"></span>
          <span class="loading width-s"></span>
          <br><br>
          <span class="loading"></span>
          <span class="loading width-m"></span>
        </div>
      </div>

      <section class="restaurant__menus">
        <span class="loading width-m height-m center"></span>
        <span class="loading width-l height-m center"></span>
        <span class="loading width-s height-m center"></span>
      </section>

    </article>
  </div>
</div>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantDetailLoading,
};
