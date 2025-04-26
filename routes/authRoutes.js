const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/registere', registerUser);
router.post('/login, loginUser');

module.exports=router;