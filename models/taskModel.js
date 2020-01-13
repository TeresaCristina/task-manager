/*13 January, 2020
Teresa Costa*/

const mongoose = require('mongoose');
const schema = mongoose.Schema;

//model for product document
let task = new schema({
    title: {type: String, required: true},
    date: {type: String},
    time: {type: String},
    endsToday: {type: String},
});

module.exports = mongoose.model('Task', task);