const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publicacion',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comentario', comentarioSchema);