const {Router} = require('express');

const {Medicamento, Usuario} = require('../models');
roteador = Router();


roteador.get('/login', (req, res)=>{
    res.status(200).render('login');
});

roteador.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/usuario/login');
});


roteador.post('/login', async (req, res)=>{
    const {login, senha} = req.body;

    const resposta = await Usuario.findOne({
        where: {
            login: login,
            senha: senha
        }
    });

    if(resposta){
        console.log(resposta)
        req.session.login = true;
        req.session.idUsuario = resposta.id;
        req.session.nome = resposta.nome;
        res.redirect('/medicamentos');
    }else{
        res.redirect('/usuario/login');
    }
});

roteador.get('/', async (req, res)=>{
    const { idUsuario } = req.session
    let usuario = await Usuario.findByPk(idUsuario);
    res.status(200).render('perfil', {usuario});
});

roteador.get('/networking',async (req, res)=> {
    const farmaceuticos = await Usuario.findAll({
            include: [{model: Medicamento}]
        });
    res.status(200).render('farmaceuticos', {farmaceuticos});
});

roteador.get('/novo', (req, res)=> {
    res.status(200).render('cadastro-usuario');
});

roteador.post('/', async (req, res)=> {
    const { nome, login, senha } = req.body;
    await Usuario.create({nome, login, senha});
    res.status(201).redirect('usuario/login');
});


roteador.get('/:id', async (req, res)=>{
});

roteador.post('/', async (req, res)=>{

});

roteador.patch('/:id', async (req, res)=>{
    let {nome, login} = req.body;
    await Usuario.update({nome, login},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/usuario');
});

roteador.delete('/:id', async (req, res)=>{
    await Usuario.destroy(
        {
            where:
            {
                id:req.params.id
            }
        }
    );
    res.status(200).redirect('/usuario/login');
});

module.exports = roteador;