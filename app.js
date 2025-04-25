const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res)=> {
    res.send('¡Servidor funcionando!');
})

const PORT = 8001;

app.listen(PORT,() =>{
    console.log(`Servidor corriendo correctamente ${PORT}`);
});