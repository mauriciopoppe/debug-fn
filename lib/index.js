'use strict'

import debug from 'debug'

export default function (ns) {
  const logger = debug(ns)
  const scope = { log: logger }
  function internal (fn) {
    if (debug.enabled(ns)) {
      fn.call(scope, logger)
    }
  }
  internal.logger = logger
  return internal
}

