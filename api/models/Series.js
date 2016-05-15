/**
 * Series.js
 *
 * @description :: Post series
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    created_by: {
      model: 'user'
    },

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    description: {
      type: 'string'
    },

    active: {
      type: 'boolean',
      default: true
    },

    images: {
      type: 'string'
    },

    posts: {
      collection: 'post'
    }
  }
};
