require('dotenv').config();
const ConnectionDB = require('./ConnectionDB');

//importar modulos
const cors = require('cors');
const express = require('express');
const authRoutes = require('./Routes/AuthRoutes');
const eventRoutes = require('./Routes/EventRoutes');
const feedbackRoutes = require('./Routes/FeedbackRoutes');
const groupRoutes = require('./Routes/GroupRoutes');
const interestRoutes = require('./Routes/InterestRoutes');
const messageRoutes = require('./Routes/MessageRoutes');
const postRoutes = require('./Routes/PostRoutes');
const userRoutes = require('./Routes/UserRoutes');



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
