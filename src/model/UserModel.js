const mongoose = require('../config/database');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    nome:  { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },

    created: { type: Date, default: Date.now()},
})

module.exports = mongoose.model('User', UserSchema);