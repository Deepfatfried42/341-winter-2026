
const routes = require('express').Router();

const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.johnathonRoute);
routes.get('/angela', lesson1controller.angelaRoute);

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router, routes;