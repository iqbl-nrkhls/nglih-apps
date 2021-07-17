const ratingStarCreator = (rating) => {
  const ratingRound = Math.floor(rating);
  let ratings = '';
  ratings += '<i class="fa fa-star"></i>'.repeat(ratingRound);
  if (rating % 1 >= 0.5) {
    ratings += '<i class="fa fa-star-half-o"></i>';
    ratings += '<i class="fa fa-star-o"></i>'.repeat(4 - ratingRound);
  } else {
    ratings += '<i class="fa fa-star-o"></i>'.repeat(5 - ratingRound);
  }
  return ratings;
};

export default ratingStarCreator;
