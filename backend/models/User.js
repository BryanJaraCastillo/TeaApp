const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // No necesitas _id, MongoDB lo generará automáticamente
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true
    // Asegúrate de hashear la contraseña antes de guardarla
  },
  profile_picture: {
    type: String, // Aquí puedes almacenar la URL de la imagen
    default: 'default_profile_picture_url' // Ejemplo de URL por defecto
  },
  friends: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    default: []
  },
}, {
  timestamps: true // Añade automáticamente los campos 'createdAt' y 'updatedAt'
});

module.exports = mongoose.model('User', UserSchema);
