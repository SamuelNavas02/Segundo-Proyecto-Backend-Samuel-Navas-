// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // para usar variables de entorno

// Crear la app de Express
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Puerto
const PORT = process.env.PORT || 3000;

// --- Conexión a MongoDB usando Mongoose ---
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// --- Endpoint inicial para probar ---
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});