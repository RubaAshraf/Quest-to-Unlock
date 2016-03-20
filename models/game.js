var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var gameSchema   = new Schema({


gname: {
    type: String,
    required: true
  },
  gdescription: {
   type:String
  },
  gpass:{
       type:String,
       required: true
  },
  Createdby:
   {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

 });


module.exports = mongoose.model('Game', gameSchema);










// var gameSchema={

// gname: {
//     type: String,
//     required: true
//   },
//   gdescription: {
//   	type:String
//   },
//   gpass:{
//      	type:String,
//      	required: true
//   },Createdby:
//    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},


// };


//   var gameschema= new mongoose.Schema(gameSchema);

//  module.exports=gameschema;
//   module.exports.gameSchema=gameSchema;










