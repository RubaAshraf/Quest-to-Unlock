var mongoose = require('mongoose');

         



var ActionSchema   = new Schema({


	name:{

		type:String,

    required: true
	},

	description:{
		type: String
	},
	gameId:
   {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},

});


module.exports = mongoose.model('Action', ActionSchema);