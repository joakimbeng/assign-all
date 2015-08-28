# assign-all

[![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Object.assign for all objects in an array

## Installation

Install `assign-all` using [npm](https://www.npmjs.com/):

```bash
npm install --save assign-all
```

## Usage

### Module usage

```javascript
var assignAll = require('assign-all');

assignAll([
  {foo: 1},
  {foo: 2},
  {bar: 'baz'}
]);
// {foo: 2, bar: 'baz'}
```

## API

### `assignAll(arr)`

| Name | Type | Description |
|------|------|-------------|
| arr | `Array` | The array of objects to merge |

Returns: `Object`, the merged object.

## License

MIT

[npm-url]: https://npmjs.org/package/assign-all
[npm-image]: https://badge.fury.io/js/assign-all.svg
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
