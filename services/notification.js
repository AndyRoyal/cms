/**
 * 通知服务
 **/
'use strict';
var mongoose = require('mongoose');
var _ = require('underscore');
var Notification = mongoose.model('Notification');


var baseServices = require('./base')(Notification);

var services = {
    findBySome: function(id, populates) {
        return new Promise(function(resolve, reject) {
            var query = Notification.findById(id)
            if (populates && populates.length > 0) {
                populates.forEach(function(item) {
                    query = query.populate(item);
                })
            }
            query.exec(function(err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    }
};

module.exports = _.extend({}, baseServices, services);