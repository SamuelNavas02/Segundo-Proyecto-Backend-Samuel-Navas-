// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Variables de entorno

// Importar rutas
const usuariosRoutes = require('./routes/usuarios'); 

// Crear la app de Express
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Montar rutas de usuarios
app.use('/usuarios', usuariosRoutes);

// Puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

// --- Conexión a MongoDB usando Mongoose desde .env ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});