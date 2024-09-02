const fs = require("fs")

interface Livro {
    id: number;
}

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deleteFavoritosId(id:number) {
    let favoritosAtuais: Livro[] = JSON.parse(fs.readFileSync('favoritos.json'));
    const item = favoritosAtuais.filter(livro => livro.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(item, null, 2));
}

function inserirFavoritos(id: number) {
    const livros: Livro[] = JSON.parse(fs.readFileSync('livros.json'));
    let favoritos: Livro[] = JSON.parse(fs.readFileSync('favoritos.json'));

    const LivroInserido = livros.find(livro => livro.id === id)

    const novaListafavoritos= [...favoritos, LivroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListafavoritos, null, 2), "utf-8");
}


module.exports = {
    getTodosFavoritos,
    deleteFavoritosId,
    inserirFavoritos
}