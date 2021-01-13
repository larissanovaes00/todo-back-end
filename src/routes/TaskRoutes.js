const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');


router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/:id', TaskController.show);
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);
router.get('/filter/late', MacaddressValidation, TaskController.late);

module.exports = router;