const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/admin/appointment/userData', userController.getAll);

router.post('/admin/appointment/userData', userController.create);

router.delete('/admin/appointment/userData/:userId', userController.delete);

module.exports = router;