require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.error(error);
    process.exit(1); // Detener la aplicación si no puede conectar a la base de datos
  }
};

module.exports = connectDB;
