const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const staffSchema = new Schema({
    "_id":{
        type: Number,
        startAt: 1,
        incrementBy: 1
    },
    name: {
        unique: true,
        required: true,
        type: String
    },
    rating:{
        rates: {
            _1: {
                type: Number,
                default: 0
            },
            _2: {
                type: Number,
                default: 0
            },
            _3: {
                type: Number,
                default: 0
            },
            _4: {
                type: Number,
                default: 0
            },
            _5: {
                type: Number,
                default: 0
            },
            total: {
                type: Number,
                default: 0
            }
        },
        total_rating: {
            type: Number,
            default: 0.0
        }
    }
})

staffSchema.plugin(autoIncrement.plugin, { model: 'Staff', field: '_id' })

module.exports = mongoose.model('Staff', staffSchema)