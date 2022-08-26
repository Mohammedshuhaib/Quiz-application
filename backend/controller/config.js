const expressAsyncHandler = require("express-async-handler");
const { createError } = require("../createError");
const Questions = require('../models/quastionModel')

module.exports = {

    GetData: expressAsyncHandler(async(req, res, next) => {
       let data = await Questions.find()
       if(data) {
        res.status(200).json(data)
       } else {
        return next(createError(404, 'data not found'))
       }
    })

}   