'use strict';
var arrify = require('arrify');
var assign = require('object-assign');

module.exports = function assignAll(arr) {
  return assign.apply(null, [{}].concat(arrify(arr)));
};
