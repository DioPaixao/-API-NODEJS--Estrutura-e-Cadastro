const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log('Mongo connected')
})

mongoose.Promise = global.Promise

module.exports = mongoose