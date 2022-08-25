const mongoose = require('mongoose')

const Schema = mongoose.Schema

const QuizSchema = new Schema(
    {
        Question:{type:String},
        Options:{type:Object},
        Explanation:{type:String},
        Answer:{type:String}
    },
    {collection: 'Questions'}
)

const model = mongoose.model('Questions', QuizSchema)

module.exports = model