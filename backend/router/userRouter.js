const express = require('express')
const router = express.Router()
const configuration = require('../controller/config')


router.get('/getData', configuration.GetData)

module.exports = router