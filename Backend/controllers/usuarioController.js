// Backend/controllers/usuarioController.js
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    const plainPassword = req.body.contraseña || req.body.password;
    const rol = req.body.rol || 'usuario';

    if (!nombre || !correo || !plainPassword) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Verificar si ya existe el correo
    const existe = await Usuario.findOne({ correo });
    if (existe) return res.status(400).json({ error: 'El correo ya está registrado' });

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(plainPassword, salt);

    // Crear usuario (campo "contraseña" según tu esquema)
    const nuevo = new Usuario({
      nombre,
      correo,
      contraseña: hashed,
      rol
    });

    await nuevo.save();

    // No devolver la contraseña en la respuesta
    const obj = nuevo.toObject();
    delete obj.contraseña;

    res.status(201).json(obj);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select('-contraseña'); // sin contraseña
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
