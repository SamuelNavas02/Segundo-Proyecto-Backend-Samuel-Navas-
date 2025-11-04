const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fechaCreacion: { type: Date, default: Date.now },

  // ✅ Relación con los comentarios de esta publicación
  comentarios: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Comentario' }
  ]
});

module.exports = mongoose.model('Publicacion', publicacionSchema);