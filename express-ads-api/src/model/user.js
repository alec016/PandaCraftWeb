const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const userSchema = new Schema({
    "_id": {
        type: Number,
        startAt: 1,
        incrementBy: 1
    },
    userName: {
        unique: true,
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    },
    email: {
        unique: true,
        required: true,
        type: String
    },
    registerDate: {
        type: Date
    },
    userPermision: {
        type: Number,
        default: 1
    },
    rating: {
        rated:{
            type: Boolean,
            default: false
        },
        day: {
            type: Date
        },
        staff: {
            id: {
                type: Schema.Types.ObjectId,
                ref: 'Staff'
            }
        },
        rating: {
            type: Number,
            enum: [1,2,3,4,5],
            message: "valor no reconocido"
        }
    }
})

userSchema.plugin(autoIncrement.plugin, { model: 'User', field: '_id' })

module.exports = mongoose.model('User', userSchema)