var mongoose =require('mongoose');

var playerMetricSchema=require('./playerMetric')
var Mixed = mongoose.Schema.Types.Mixed;
var Schema =mongoose.Schema;


var metricSchema = new Schema({

name:{


	type: String,
    required: true
},
description:
{
	type:String
},

type :
{
	type:String
},
constraints:{type: Mixed},

gameId:
   {type: mongoose.Schema.Types.ObjectId, ref: 'Game'}

});


// function createMetricPlayer(playerID){
// 	var metric=this;
// 	var playerMetric=this.db.model('playerMetric');
// 	 var obj = {metric:metric.id, player:playerID};
// 	 playerMetric.collection.insert(obj,oninsert);

// 	function onInsert(err, docs) {
//     if (err) {
//         // TODO: handle error
//     } else {
//         console.info('%d potatoes were successfully stored.', docs.length);
//     }
// }




module.exports = mongoose.model('Metric', metricSchema);






