/** ../models/albumModel.js **/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var albumSchema = Schema({
    artist: String,
    title: String,
    comments: String
});

module.exports = mongoose.model('album', albumSchema);