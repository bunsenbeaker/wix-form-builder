const Submission = require('../schemas/submission.schema');

// Handle index actions
exports.index = function (req, res) {
    Submission.get(function (err, submissions) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Submissions retrieved successfully",
            data: submissions
        });
    });
};

// Handle create form actions
exports.new = function (req, res) {
    
    const form_id = req.body.form_id;
    const submitted = new Date();
    const data = JSON.parse(req.body.data);

    let submission = new Submission({ form_id, submitted, data });
    
submission.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New submission created!',
            data: submission
        });
    });
};
