// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Variables de entorno

// Importar rutas
const usuariosRoutes = require('./routes/usuarios'); 
const publicacionesRoutes = require('./routes/publicaciones');

// Importar modelos para mostrar datos en la raíz
const Usuario = require('./models/usuario');
const Publicacion = require('./models/publicacion');

// Crear la app de Express
const app = express();

// Middleware para recibir JSON 
app.use(express.json());

// Montar rutas
app.use('/usuarios', usuariosRoutes);
app.use('/publicaciones', publicacionesRoutes);

// Ruta raíz
app.get('/', async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalPublicaciones = await Publicacion.countDocuments();
    
    res.send(`
      <h1>¡Servidor funcionando correctamente!</h1>
      <p>Usuarios registrados: ${totalUsuarios}</p>
      <p>Publicaciones en el blog: ${totalPublicaciones}</p>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener información de la base de datos');
  }
});

// Puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(' Conectado a MongoDB'))
  .catch(err => console.error(' Error al conectar a MongoDB:', err));

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});