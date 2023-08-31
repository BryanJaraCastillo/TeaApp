const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//rutas
app.get('/', (req, res) => {
    res.send('Backend operativo');
});

//conexion base de datos mongodb con try/catch

try {
    mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
} catch (error) {
    console.log(error);
}  





//puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
