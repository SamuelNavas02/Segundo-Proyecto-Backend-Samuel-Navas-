const mongoose = require('mongoose');

// Definir los campos (estructura del usuario)
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'usuario'], // Solo puede ser uno de estos dos
        default: 'usuario'
    }
});

// Exportar el modelo para usarlo en otros archivos
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;