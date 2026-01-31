const express = require('express');
const path = require('path');
const { Amigo } = require('./models');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.redirect('/amigos'));
app.get('/amigos', async (req, res) => {
    const amigos = await Amigo.findAll({ order: [['id', 'ASC']] });
    res.render('amigos/index', { amigos });
});
app.get('/amigos/novo', (req, res) => res.render('amigos/novo'));
app.post('/amigos/novo', async (req, res) => {
    const { nome, email } = req.body;
    await Amigo.create({ nome, email });
    res.redirect('/amigos');
});
app.get('/amigos/editar/:id', async (req, res) => {
    const amigo = await Amigo.findByPk(req.params.id);
    if (!amigo) return res.status(404).send('Amigo não encontrado.');
    res.render('amigos/editar', { amigo });
});
app.post('/amigos/editar/:id', async (req, res) => {
    const { nome, email } = req.body;
    await Amigo.update({ nome, email }, { where: { id: req.params.id } });
    res.redirect('/amigos');
});
app.post('/amigos/excluir/:id', async (req, res) => {
    await Amigo.destroy({ where: { id: req.params.id } });
    res.redirect('/amigos');
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));