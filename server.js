import express from 'express';
import ejs from 'ejs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Le server a bien démarré sur le port: ${PORT}`);
});

app.get('/', (req, res) => {
  const user = null; // Remplacez par vos données utilisateur
  res.render('index', { user });
});