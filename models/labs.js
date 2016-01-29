var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labSchema = new Schema({
	
	labName:{ type: String, default: '' },
	roomNum:{type: String, default: ''},
	seats: {type: String,default: ''},
	software: {type: String,default: ''},
	hardware:{type: String, default: ''},
	intro: {type: String,default: ''},
	labType: {type: String, ref : 'labType' ,default: ''}	
});

module.exports = mongoose.model('labs',labSchema);