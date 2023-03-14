import express from 'express';
import ejs from 'ejs';
import path from 'path';

const app = express();

const PORT = 4000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('Le server a bien démarré sur le port:' + PORT);
})

app.get('/', (req, res) => {
    const user = null; // Remplacez par vos données utilisateur
    res.render('index', { user });
  });