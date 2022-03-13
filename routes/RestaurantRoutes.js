'use strict'
const RestaurantController = require('../controllers/RestaurantController')
const OrderController = require('../controllers/OrderController')

module.exports = (options) => {
  const app = options.app
  const middlewares = options.middlewares

  app.route('/restaurants')
    .get(RestaurantController.index)
    .post(RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)
    .put(RestaurantController.update)
    .delete(RestaurantController.destroy)

  app.route('restaurants/:restaurandId/orders')
    .get(OrderController.indexRestaurant)

  app.route('restaurants/:restaurantId/analytics')
    .get(OrderController.analytics)
}
