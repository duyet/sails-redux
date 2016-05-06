/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    attributes: {
        userid: {
            model: 'user'
        },
        firstname: {
            type: 'string'
        },
        lastname: {
            type: 'string'
        },
        gender: {
            type: 'string'
        },
        dob: {
            type: 'date'
        },
        address: {
            type: 'text'
        }
    }
};
