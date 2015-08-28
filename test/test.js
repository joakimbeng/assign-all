'use strict';
var test = require('tape');
var assignAll = require('../src');

test('assign-all merges all objects in an array', function (assert) {
  var objs = [
    {foo: 1},
    {foo: 2},
    {bar: 'baz'}
  ];
  assert.same(assignAll(objs), {foo: 2, bar: 'baz'});
  assert.end();
});
