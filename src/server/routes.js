const express = require('express');
const formsController = require('./controllers/forms.controller');
const submissionsController = require ('./controllers/submissions.controller');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to FormBuilder Demo!'
    });
});

router.route('/forms')
    .get(formsController.index)
    .post(formsController.new);
router.route('/forms/:form_id')
    .get(formsController.view)
    .patch(formsController.update)
    .put(formsController.update)
    .delete(formsController.delete);

    router.route('/submissions')
    .get(submissionsController.index)
    .post(submissionsController.new);


module.exports = router;