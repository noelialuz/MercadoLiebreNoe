const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/crearProducto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/crearProducto.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});