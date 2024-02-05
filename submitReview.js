// submitReview.js

exports.handler = async function (event, context) {
  const { restaurantName, rating, comment } = JSON.parse(event.body);

  // Do something with the review (store it in a database, etc.)
  // For simplicity, we'll store it in an array for now
  let reviews = [];

  reviews.push({ restaurantName, rating, comment });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};