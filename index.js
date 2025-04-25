require('dotenv').config();
const sequelize = require('./config/database');
const User = require('./models/User');

async function testConnectionAndSync() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con éxito.');

    await sequelize.sync({ force: true }); // Crea la tabla (elimina si ya existe)
    console.log('Tabla "users" creada correctamente.');

    // Puedes probar creando un usuario de ejemplo si quieres:
    // await User.create({
    //   username: 'jenifer_dev',
    //   email: 'jenifer@example.com',
    //   password: 'clave1234'
    // });

  } catch (error) {
    console.error(' Error en la conexión o sincronización:', error.message);
  } finally {
    await sequelize.close(); // Cerramos conexión al final
  }
}

testConnectionAndSync();
