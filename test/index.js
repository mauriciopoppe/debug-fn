'use strict'

import debugFn from '../lib/index.js'
import test from 'tape'

test('log using the internal logger given as argument', t => {
  t.plan(2)
  const debug = debugFn('fn') 
  debug(function (log) {
    t.assert(true, 'should be called')
    // property namespace is created in `debug`
    t.assert(log.namespace === 'fn', 'argument is the internal logger')
  })
})

test('log using the internal logger stored in the scope', t => {
  t.plan(2)
  const debug = debugFn('fn') 
  debug(function () {
    t.assert(true, 'should be called')
    t.assert(this.log.namespace === 'fn', 'this.log is the internal logger')
  })
})

