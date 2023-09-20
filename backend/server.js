require('dotenv').config();
const ConnectionDB = require('./connectionDB');

//importar modulos
const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const groupRoutes = require('./routes/groupRoutes');
const interestRoutes = require('./routes/interestRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./Routes/PostRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;

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

//rutas de la api 
app.use('/api', authRoutes);
app.use('/api', eventRoutes);
app.use('/api', feedbackRoutes);
app.use('/api', groupRoutes);
app.use('/api', interestRoutes);
app.use('/api', messageRoutes);
app.use('/api', postRoutes);
app.use('/api', userRoutes);


//puerto
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
