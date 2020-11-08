const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Livro = require('./models/livro');

mongoose.connect('mongodb+srv://lcastro:hudixo1525@cluster0.4sbfx.mongodb.net/app-mean?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conexão OK")
    }).catch(() => {
        console.log("Conexão NOK")
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.get('/api/livros', (req, res, next) => {
    Livro.find().then(
        Lista => {
            res.status(200).json({
                mensagem: "Tudo OK",
                livros: Lista
            });
        })
});

app.post('/api/livros', (req, res, next) => {
    const livro = new Livro({
        id: req.body.id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        paginas: req.body.paginas
    })
    livro.save();
    console.log(livro);
    res.status(201).json({ mensagem: 'Livro inserido' })
});

app.use('/api/livros', (req, res, next) => {
    res.status(200).json({
        mensagem: "Sucesso",
        livros: Livro
    });
});
module.exports = app;