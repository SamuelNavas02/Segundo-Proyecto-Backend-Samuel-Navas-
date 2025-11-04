const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');

router.get('/', async (req, res) => {
  try {
    const comentarios = await Comentario.find()
      .populate('autor', 'nombre')
      .populate('publicacion', 'titulo');
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { contenido, autor, publicacion } = req.body;
  const comentario = new Comentario({ contenido, autor, publicacion });

  try {
    const nuevoComentario = await comentario.save();
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;