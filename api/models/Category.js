/**
 * Category.js
 *
 * @description :: Medica post category.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  identity: 'category',
  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },

    description: 'string',

    // Created by author
    created_by: {
      model: 'user'
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
