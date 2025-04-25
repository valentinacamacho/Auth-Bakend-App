require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req,res)=> {
    res.send('¡Servidor funcionando!');
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log(`Servidor corriendo correctamente ${PORT}`);
});