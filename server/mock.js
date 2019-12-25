
const express = require('express')
const router = express.Router()
const MODULE_PATH = '../src/store/modules'
require(`${MODULE_PATH}/login/mock`)(router)

module.exports = router
