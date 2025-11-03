const Publicacion = require('../models/publicacion');

// Crear nueva publicación
exports.crearPublicacion = async (req, res) => {
  try {
    const { titulo, contenido, autor } = req.body;

    if (!titulo || !contenido || !autor) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nueva = new Publicacion({
      titulo,
      contenido,
      autor
    });

    await nueva.save();
    res.status(201).json(nueva);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Listar todas las publicaciones
exports.listarPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.find()
      .populate('autor', 'nombre correo'); // Trae info del autor sin contraseña

    res.json(publicaciones);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
};