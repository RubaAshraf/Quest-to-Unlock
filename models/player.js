var mongoose =require('mongoose');

var playerMetric=require('./playerMetric');
var Schema =mongoose.Schema;
var PlayerSchema = new Schema({
	name :{
		type:String,
		 required: true
	},
gid:
	 {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},

	 createdOn:{
        type:Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Player', PlayerSchema);


