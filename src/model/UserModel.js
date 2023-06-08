const mongoose = require('../config/database');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    nome:  { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },

    created: { type: Date, default: Date.now()},
})

module.exports = mongoose.model('User', UserSchema);

// mongodb+srv://rodrigoexer1:2gDvCeKENORJmDxp@cluster0.2ilevle.mongodb.net/
/**
 {
	 "macaddress": "00:1B:44:11:3A:B7 ",
	 "type": 1,
     "title": "New Task",
	 "description": " Em fim programando muito",
	 "when": "2023-06-08T02:40:43.034+00:00"
 }
 */