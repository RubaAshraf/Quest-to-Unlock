var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var Mixed = mongoose.Schema.Types.Mixed;

var AchievementSchema = new mongoose.Schema({

 name: {
        type: String,
    },
    description: {
        type: String,
    },
    rules: {
        type: [Mixed],
    },


    Unlocked:{
    	type:Boolean,
    	default:false
    },
      gid:
	 {type: mongoose.Schema.Types.ObjectId, ref: 'Game'}


	});
function isActive(condition,value,activationValue){
	var aRet=false;
	switch (condition){
		case'>':
		aRet=(value>activationValue);
		break;
		case'<':
		aRet=(value<activationValue);
		break;

		case'==':
		aRet=(value==activationValue);
		break;
	}

	return aRet;
}


module.exports = mongoose.model('Achievement', AchievementSchema);
