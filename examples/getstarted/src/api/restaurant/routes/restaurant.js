'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const routes = createCoreRouter('api::restaurant.restaurant');

module.exports = routes;
