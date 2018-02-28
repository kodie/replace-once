'use strict'

module.exports = (str, find, replace, flags) => {
  var gFlag = false

  if (typeof str !== 'string') {
    throw new TypeError('`str` parameter must be a string!')
  }

  if (!Array.isArray(find)) {
    throw new TypeError('`find` parameter must be an array!')
  }

  if (!Array.isArray(replace)) {
    throw new TypeError('`replace` parameter must be an array!')
  }

  if (!find.length || !replace.length) {
    throw new Error('`find` and `replace` parameters must not be empty!')
  }

  if (find.length !== replace.length) {
    throw new Error('`find` and `replace` parameters must be equal in length!')
  }

  if (flags) {
    if (typeof flags !== 'string') {
      throw new TypeError('`flags` parameter must be a string!')
    } else if (~flags.indexOf('g')) {
      gFlag = true
    } else {
      flags += 'g'
    }
  } else {
    flags = 'g'
  }

  var done = []
  var joined = find.join(')|(')
  var regex = new RegExp('(' + joined + ')', flags)

  return str.replace(regex, (match, ...finds) => {
    var replaced

    finds.some((found, index) => {
      if (found) {
        if (gFlag) {
          replaced = replace[index]
        } else if (!~done.indexOf(found)) {
          done.push(found)
          replaced = replace[index]
        } else {
          replaced = found
        }

        return true
      }
    })

    return replaced
  })
}
