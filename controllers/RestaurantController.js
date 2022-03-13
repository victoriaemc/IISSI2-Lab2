'use strict'
const models = require('../models')
const Restaurant = models.Restaurant
const Product = models.Product

exports.index = async function (req, res) {
  const allRestaurants = await Restaurant.findAll(req.body)
}

exports.indexOwner = function (req, res) {
  res.sendStatus(404)
}

exports.create = async function (req, res) {
  const newRestaurant = Restaurant.build(req.body)
  // newRestaurant.userId = req.user.id // authenticated user
  if (typeof req.files?.heroImage !== 'undefined') {
    newRestaurant.heroImage = req.files.heroImage[0].path
  }
  if (typeof req.files?.logo !== 'undefined') {
    newRestaurant.logo = req.files.logo[0].path
  }
  try {
    const restaurant = await newRestaurant.save()
    res.json(restaurant)
  } catch (err) {
    if (err.name.includes('ValidationError')) { // The database may return some kind of error.
      res.status(422).send(err)
    } else {
      res.status(500).send(err)
    }
  }
}

exports.show = async function (req, res) {

}

// Implement below, the update and destroy functions as well

exports.update = async function (req, res) {

}

exports.destroy = async function (req, res) {

}
