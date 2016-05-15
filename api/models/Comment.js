/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  identity: 'comment',
  attributes: {
    created_by: {
      model: 'user',
      required: true
    },

    parent_item: {
      model: 'comment',
      null: true
    },

    message: {
      type: 'string',
      required: true
    },

    post: {
      model: 'post',
      required: true
    },

    vote_count: {
      type: 'number',
      default: 0
    }
  }
};
