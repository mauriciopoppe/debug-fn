'use strict'

import debugFn from '../lib/index.js'
import test from 'tape'

test('log should be disabled when DEBUG is not set', t => {
  t.plan(1)
  const debug = debugFn('fn')
  let me = true
  debug(function () {
    me = false
  })
  t.assert(me, 'values should not be changed')
})

