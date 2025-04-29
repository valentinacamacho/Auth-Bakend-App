const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso concedido al perfil', user: req.user });
  });
  
  module.exports = router;