import test from 'ava'

const replaceOnce = require('.')

test('default', t => {
  var str = 'x dddd x d x ddd x dddd x dd x'
  var find = ['dddd', 'ddd', 'dd', 'd']
  var replace = ['d', 'dd', 'ddd', 'dddd']
  var replaced = replaceOnce(str, find, replace)
  t.is(replaced, 'x d x dddd x dd x dddd x ddd x')
})

test('global', t => {
  var str = 'x dddd x d x ddd x dddd x dd x'
  var find = ['dddd', 'ddd', 'dd', 'd']
  var replace = ['d', 'dd', 'ddd', 'dddd']
  var replaced = replaceOnce(str, find, replace, 'g')
  t.is(replaced, 'x d x dddd x dd x d x ddd x')
})

test('case-insensitive', t => {
  var str = 'MoMma mo daD ma DaDdA da moMMy do mOm de DAddY'
  var find = ['Mommy', 'Daddy', 'Dadda', 'Momma', 'Mom', 'Dad']
  var replace = ['Daddy', 'Mommy', 'Momma', 'Dadda', 'Dad', 'Mom']
  var replaced = replaceOnce(str, find, replace, 'i')
  t.is(replaced, 'Dadda mo Mom ma Momma da Daddy do Dad de Mommy')
})

test('regex', t => {
  var str = 'Replace this (not this!) and this and that'
  var find = ['that', 'this(?!!)']
  var replace = ['[replaced that]', '[replaced this]']
  var replaced = replaceOnce(str, find, replace, 'gi')
  t.is(replaced, 'Replace [replaced this] (not this!) and [replaced this] and [replaced that]')
})

test('str type check', t => {
  t.throws(() => replaceOnce(null, ['a'], ['b']))
})

test('find type check', t => {
  t.throws(() => replaceOnce('a', null, ['b']))
})

test('replace type check', t => {
  t.throws(() => replaceOnce('a', ['b'], null))
})

test('find length check', t => {
  t.throws(() => replaceOnce('a', [], ['b']))
})

test('replace length check', t => {
  t.throws(() => replaceOnce('a', ['b'], []))
})

test('flags type check', t => {
  t.throws(() => replaceOnce('a', ['b'], ['c'], []))
})
