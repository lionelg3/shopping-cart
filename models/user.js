var mongoose = require('mongoose');
var Schema = mongoose.schema;

var userSchema = new Schema({
    email: {type: Strign, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);