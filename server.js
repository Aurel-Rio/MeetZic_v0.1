import express from 'express';
import ejs from 'ejs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;

app.use('/js', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((req, res, next) => {
    console.log(`Erreur 404 : ${req.url}`);
    res.status(404).send("Désolé, la page que vous recherchez est introuvable");
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops! Une erreur est survenue');
  });
  
  
app.listen(PORT, () => {
  console.log(`Le server a bien démarré sur le port: ${PORT}`);
});

app.get('/', (req, res) => {
  const user = null; // Remplacez par vos données utilisateur
  res.render('index', { user });
});