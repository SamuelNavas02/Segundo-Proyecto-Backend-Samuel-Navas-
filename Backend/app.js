// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Variables de entorno

// Importar rutas (asegúrate de que el archivo se llama routes/usuarios.js o similar)
const usuariosRoutes = require('./routes/usuarios'); 

// Crear la app de Express
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

// --- Conexión a MongoDB usando Mongoose desde .env ---
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// --- Usar las rutas ---
app.use('/api', usuariosRoutes); 
// Esto significa que la ruta real será: http://localhost:3000/api/usuarios

// --- Endpoint inicial para probar ---
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});