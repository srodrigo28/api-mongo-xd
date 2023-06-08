const mongoose = require('mongoose');

const url =  "mongodb+srv://rodrigoexer1:2gDvCeKENORJmDxp@cluster0.2ilevle.mongodb.net/"

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;