require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

async function Connection() {
  try {
    await sequelize.authenticate();
    console.log('Conectado correctamente a la Database');
  } catch (error) {
    console.error('Error al conectar la Database:', error.message);
  }
}

Connection();

module.exports = sequelize;
