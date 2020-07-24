
const mongoose = require('mongoose');


// Form Schema
const formSchema = mongoose.Schema({
    name: String,
    created: Date,
    fields: [{ input_type: String, name: String, label: String }]
});


const Form = module.exports = mongoose.model('Form', formSchema);

module.exports.get = function (callback, limit) {
    Form.find(callback).limit(limit);
}