var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var Mixed = mongoose.Schema.Types.Mixed;
         



var RuleSchema   = new Schema({
 metric:  {type: mongoose.Schema.Types.Mixed, ref: 'Mertic'},
 
 
 condition: {
        type: Mixed,
    },
    activationValue:{
    	type: Mixed,
    },


    gid:
	 {type: mongoose.Schema.Types.ObjectId, ref: 'Game'}

	});

module.exports = mongoose.model('Rule', RuleSchema);