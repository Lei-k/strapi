'use strict';

const { sanitize } = require('@strapi/utils');
const { contentAPI } = sanitize;

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async find(ctx) {
    const contentType = strapi.contentType('api::restaurant.restaurant');

    const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);

    console.log(JSON.stringify(ctx));

    let total = await strapi.db.query('api::restaurant.restaurant').sum('stars', {});

    console.log('total', total);

    const response = await super.find(ctx);

    return response;
  },
}));
