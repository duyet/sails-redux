/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  identity: 'post',
  attributes: {
    title: {
      type: 'string',
      required: true
    },

    category: {
      model: 'category'
    },

    series: {
      model: 'series',
      null: true
    },

    content: {
      type: 'string'
    },

    description: {
      type: 'string'
    }
  }
}
