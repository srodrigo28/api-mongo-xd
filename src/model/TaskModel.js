const mongoose = require('../config/database');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    macaddress: { 
        type: String,
        required: true,
    },
    types: {
        type: Number, 
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    when: {
        type: Date, 
        required: true,
    },

    done: {
        type: Boolean,
        default: false,
    },
    created: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('Task', TaskSchema);

// mongodb+srv://rodrigoexer1:2gDvCeKENORJmDxp@cluster0.2ilevle.mongodb.net/
/**
 {
	 "macaddress": "00:1B:44:11:3A:B7 ",
	 "type": 1,
     "title": "Task",
	 "description": " Em fim programando muito",
	 "when": "2020-12-17T14:30:00:000"
 }
 */