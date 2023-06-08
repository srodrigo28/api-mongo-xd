const mongoose = require('../config/database');
const Schema  = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress:  { type: String, required: true},
    type:        { type: Number, required: true },
    title:       { type: String, required: true },
    description: { type: String, required: true },
    when:        { type: Date,   required: true },

    done: {type: Boolean, default: false },
    created: { type: Date, default: Date.now()},
})

module.exports = mongoose.model('Task', TaskSchema);
/**
  {
	 "macaddress": "00:1B:44:11:3A:B7 ",
	 "type": 1,
     "title": "Task",
	 "description": " Feriado programando muito",
	 "when": "2023-06-08T16:09:25.557+00:00"
 }
 */