const express = require('express')
const cors = require('cors');
const rotaLivro = require('./rotas/livros')
const rotaFavoritos = require('./rotas/favoritos')


const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8000;

app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavoritos)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});


