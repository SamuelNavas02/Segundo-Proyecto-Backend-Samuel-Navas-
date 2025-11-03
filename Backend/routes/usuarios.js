const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Crear usuario (POST /usuarios)
router.post('/', usuarioController.crearUsuario);

// Listar usuarios (GET /usuarios)
router.get('/', usuarioController.listarUsuarios);

module.exports = router;