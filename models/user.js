var mongoose = require('mongoose');

// var userSchema= {
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     match: /.+@.+\..+/,
//     lowercase: true
//   },
//   picture: {
//       type: String,
     
//       match: /^http:\/\//i
//     },
//      password: { type: String },
     
    


//   };


  // var schema= new mongoose.Schema(userSchema);

  // module.exports=schema;
  // module.exports.userSchema=userSchema;





  var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
  firstname: {
    type:String,

    required: true
  },
  lastname  : {
    type:String,

    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
    lowercase: true,
      unique: true
  },
     password: { type: String }
});

module.exports = mongoose.model('User', UserSchema);