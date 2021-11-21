const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false // Serve para quando buscar os usuarios essa informação da senha não venha
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
// .pre é uma função do mongoose
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash

    next()
})

const User = mongoose.model('User',UserSchema)

module.exports = User