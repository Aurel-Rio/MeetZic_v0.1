import express from express;

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log('Le server a bien démarré sur le port:' + PORT);
})

app.get('/', (req,res) => {
    res.send('Bienvenue sur Meet \'Zic');
})