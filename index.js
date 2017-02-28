/*!
 * eslint-config-charlike <https://github.com/tunnckoCore/eslint-config-charlike>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const fs = require('fs')
const value = fs.readFileSync('./config.json', 'utf8')

module.exports = JSON.parse(value)
