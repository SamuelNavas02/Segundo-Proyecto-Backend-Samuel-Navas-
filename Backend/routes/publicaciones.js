const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacionController');

// Crear publicación (POST /publicaciones)
router.post('/', publicacionController.crearPublicacion);

// Listar publicaciones (GET /publicaciones)
router.get('/', publicacionController.listarPublicaciones);

module.exports = router;