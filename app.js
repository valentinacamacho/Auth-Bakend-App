require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

//import routes
const authRoutes = require('./routes/authRoutes');

//use routes
app.use('/api/auth', authRoutes);

//route base app.js
app.get('/', (req,res)=> {
    res.send('¡Servidor funcionando!');
})

const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>{
    console.log(`Servidor corriendo correctamente ${PORT}`);
});

