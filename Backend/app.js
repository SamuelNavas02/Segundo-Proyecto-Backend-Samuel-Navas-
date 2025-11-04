// Importar librerías
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Importar rutas
const usuariosRoutes = require('./routes/usuarios'); 
const publicacionesRoutes = require('./routes/publicaciones');
const comentariosRoutes = require('./routes/comentarios');

// Importar modelos para mostrar datos en la raíz
const Usuario = require('./models/usuario');
const Publicacion = require('./models/publicacion');
const Comentario = require('./models/Comentario');

// Crear la app de Express
const app = express();

// Middleware para recibir JSON 
app.use(express.json());

// Montar rutas
app.use('/usuarios', usuariosRoutes);
app.use('/publicaciones', publicacionesRoutes);
app.use('/comentarios', comentariosRoutes);

// Ruta raíz
app.get('/', async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalPublicaciones = await Publicacion.countDocuments();
    const totalComentarios = await Comentario.countDocuments();
    
    res.send(`
      <h1>¡Servidor funcionando correctamente!</h1>
      <p>Usuarios registrados: ${totalUsuarios}</p>
      <p>Publicaciones en el blog: ${totalPublicaciones}</p>
      <p>Comentarios en el blog: ${totalComentarios}</p>
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
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});