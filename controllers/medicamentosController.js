const {Router} = require('express');
const {Medicamento, Usuario} = require('../models');

const roteador = Router();

roteador.get('/', async (req, res)=>{
    const {idUsuario} = req.params;

    const medicamentos = await Medicamento.findAll({
        include: [{model: Usuario}]
    });
    const idLogin = req.session.idUsuario;
    res.status(200).render('index', {medicamentos, idLogin});

    res.status(200).send(medicamentos);
});

roteador.get('/todos', async (req, res)=>{
    const medicamentos = await Medicamento.findAll({
        include: [{model: Usuario}]
    });

    const idLogin = req.session.idUsuario;

    res.status(200).render('medicamentos', {medicamentos, idLogin});
});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('new');
});

roteador.get('/:id', async (req, res)=>{
    const {id} = req.params;

    let medicamento = await Medicamento.findByPk(id);
    res.status(200).render('edit', {medicamento});
});

roteador.get('/', async (req, res)=>{
    const {idUsuario} = req.params;

    let medicamento = await Medicamento.findAll({
        where: { usuarioId : idUsuario}
    });
    res.status(200).render('medicamentos', {medicamento});
});

roteador.post('/', async (req, res)=>{
    const { nome, descricao } = req.body;
    const {  idUsuario } = req.session;
    const usuarioId = idUsuario
    const usuario = idUsuario
    await Medicamento.create({usuario, nome, descricao, usuarioId});
    res.status(201).redirect('/medicamentos');
});

roteador.patch('/:id', async (req, res)=>{
    let {descricao, nome} = req.body;
    await Medicamento.update({descricao, nome},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/medicamentos');
});

roteador.delete('/:id', async (req, res)=>{
    await Medicamento.destroy(
        {
            where:
            {
                id:req.params.id
            }
        }
    );

    res.status(200).redirect('/medicamentos');
});

module.exports = roteador;