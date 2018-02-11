const router = require('express').Router()
const productsController = require('../controllers/products.controller')

module.exports = router

// API routes
router.get('/', productsController.readAll);