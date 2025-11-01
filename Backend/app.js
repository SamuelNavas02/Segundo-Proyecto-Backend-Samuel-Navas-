// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // para usar variables de entorno

// Crear la app de Express
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

// --- Conexión a MongoDB usando Mongoose desde .env ---
mongoose.connect(process.env.MONGODB_URI, {
    // Las opciones useNewUrlParser y useUnifiedTopology ya no son necesarias en Mongoose 6+
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