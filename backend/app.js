const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const livros = [{
        id: '1',
        nome: 'Jose',
        fone: '11223344',
        email: 'jose@email.com'
    },
    {
        id: '2',
        nome: 'Jaqueline',
        fone: '22112211',
        email: 'jaqueline@email.com'
    }
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/clientes', (req, res, next) => {
    const livros = req.body;
    console.log(livros);
    res.status(201).json({ mensagem: 'Livro inserido' })
});

app.use('/api/Livros', (req, res, next) => {
    res.status(200).json({
        mensagem: "Sucesso",
        livros: livros
    });
});
module.exports = app;