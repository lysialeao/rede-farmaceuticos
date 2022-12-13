const medicamentos = require('./medicamentosController');
const usuarios = require('./usuariosController');

const controllers = {
    medicamentos: medicamentos,
    usuarios: usuarios
}

module.exports = controllers;