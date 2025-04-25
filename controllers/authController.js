const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (requestAnimationFrame, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya esta registrado' })
    }

    const hashedPass = await bcrypt.hash(password, 10);

    //creation new user
    const newUser = await User.create({ username, email, password: hashedPass });
    res.status(201).json({ message: 'Usuario registrado con exito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  };
}