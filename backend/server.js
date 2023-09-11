require('dotenv').config();
const ConnectionDB = require('./connectionDB'); 

//importar modulos
const cors = require('cors');
const express =require('express');


// const eventRouter = require('./Routes/EventRoutes');




//inicializar express
const app = express();





//middlewares
app.use(express.json());
app.use(cors());



//conexion base de datos mongodb con try/catch con archivo .env y connectionDB.js
ConnectionDB();

//rutas
app.get('/', (req, res) => {
    res.send('Backend operativo');
});

//puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
