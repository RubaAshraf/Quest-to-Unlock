var mongoose =require('mongoose');
var Schema =mongoose.Schema;
var PlayerMetricSchema = new Schema({
 score: {
        type: Number,
        'default': 0,
        min: 0
    },

     metric: 
         {type: mongoose.Schema.Types.ObjectId, ref: 'Metric'}
    ,
player:
	 {type: mongoose.Schema.Types.ObjectId, ref: 'Player'}


});




module.exports = mongoose.model('playerMetric', PlayerMetricSchema);