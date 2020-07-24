const Form = require('../schemas/form.schema');

// Handle index actions
exports.index = function (req, res) {
    Form.get(function (err, forms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Forms retrieved successfully",
            data: forms
        });
    });
};

// Handle create form actions
exports.new = function (req, res) {
    
    let newClientForm = JSON.parse(req.body.newForm);

    const newForm = new Form({
        name: newClientForm.name,
        created: new Date(),
        fields: newClientForm.fields
    });


    
    newForm.save(function (err) {
         //if (err)
           //  res.json(err);
res.json({
            message: 'New form created!',
            data: newForm
        });
    });
};

exports.view = function (req, res) {
    Form.findById(req.params.form_id, function (err, form) {
        if (err)
            res.send(err);
        res.json({
            message: 'Form details loading..',
            data: form
        });
    });
};


exports.update = function (req, res) {
Form.findById(req.params.form_id, function (err, form) {
        if (err)
            res.send(err);
        form.name = req.body.name ? req.body.name : 'form name';
       
        form.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Form Info updated',
                data: form
            });
        });
    });
};

exports.delete = function (req, res) {
    Form.remove({
        _id: req.params.form_id
    }, function (err, form) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Form deleted'
        });
    });
};