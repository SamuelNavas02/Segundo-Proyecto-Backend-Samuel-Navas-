// Importar Express para crear rutas
const express = require('express');
const router = express.Router();

// Ruta de prueba para usuarios
router.get('/usuarios', (req, res) => {
    res.send('Ruta de usuarios funcionando ✅');
});

// Exportar el router para usarlo en app.js
module.exports = router;