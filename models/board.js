const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let boardSchema = new Schema({
    title: String
});


boardSchema.plugin(autoIncrement.plugin, 'board')
module.exports = mongoose.model('board', boardSchema);
