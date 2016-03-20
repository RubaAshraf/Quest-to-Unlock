var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;
var PlayerAchievement = new mongoose.Schema({
    achievement: {
        type: ObjectId,
        ref:'Achievement'
    },
    PlayerRules: {
        type: [Mixed],
    },
    player: {
        type: ObjectId, ref: 'Player'
    },
    
});

module.exports = mongoose.model('PlayerAchievement', PlayerAchievement);