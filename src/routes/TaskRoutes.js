const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

// funções só são executadas depois que os campos requeridos forem validados
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);

router.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;