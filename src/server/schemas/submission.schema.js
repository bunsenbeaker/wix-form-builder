
const mongoose = require('mongoose');

// Form Schema
const submissionSchema = mongoose.Schema({
    form_id: String,
    submitted: Date,
    data: [{name: String, value: String}]
});


const Submission = module.exports = mongoose.model('Submission', submissionSchema);

module.exports.get = function (callback, limit) {
    Submission.find(callback).limit(limit);
}