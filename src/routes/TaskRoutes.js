const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

// minha função de create só é executada depois do taskvalidation, ou seja, só depois que 
// os campos requeridos forem devidamente validados
router.post('/', TaskValidation, TaskController.create);

module.exports = router;