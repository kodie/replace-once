# replace-once

[![npm package version](https://img.shields.io/npm/v/replace-once.svg?style=flat-square)](https://www.npmjs.com/package/replace-once)
[![Travis build status](https://img.shields.io/travis/kodie/replace-once.svg?style=flat-square)](https://travis-ci.org/kodie/replace-once)
[![npm package downloads](https://img.shields.io/npm/dt/replace-once.svg?style=flat-square)](https://www.npmjs.com/package/replace-once)
[![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
[![license](https://img.shields.io/github/license/kodie/replace-once.svg?style=flat-square)](license.md)

Make multiple replacements in a string without replacing ones that have already been replaced.

## Installation

```shell
npm install --save replace-once
```

## Usage

### replaceOnce(str, find, replace, [ flags ])

```javascript
const replaceOnce = require('replace-once')

var str = 'abc abcd a ab'
var find = ['abcd', 'abc', 'ab', 'a']
var replace = ['a', 'ab', 'abc', 'abcd']
replaceOnce(str, find, replace, 'gi')
//=> 'ab a abcd abc'
```

### Parameters

#### str (string)

The string to do replacements on.

#### find (array)

An array of strings to search for when doing replacements. Must be in the same order as their replacement specified inside of the `replace` parameter. Strings may contain [Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression) (regexp).

#### replace (array)

An array of strings to replace the strings specified inside of the `find` parameter with. Must be in the same order as their counterpart specified inside of the `find` parameter.


#### flags (string)

*Optional*

RegExp flags to use when doing replacements. (e.g `g` for global, `i` for case-insensitive)

## License
MIT. See the [license.md file](license.md) for more info.
