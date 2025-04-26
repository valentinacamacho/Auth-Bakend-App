const User = require('../models/User');

// Register user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Basic Validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Create user
    const newUser = await User.create({ username, email, password });

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Login the user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
