const fs = require("fs")

interface Livro {
    id: number;
}

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id: number): Livro | undefined {
    const livros: Livro[] = JSON.parse(fs.readFileSync('livros.json'));
    const livroFiltrado = livros.filter((livro: { id: number }) => livro.id === id)[0];

    return livroFiltrado
}

function inserirLivro(livroNovo: Livro) {
    const livros: Livro[] = JSON.parse(fs.readFileSync('livros.json'));

    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros, null, 2), "utf-8");
}

function modificaLivro(id: number, modificacoes: Partial<Livro>) {
    let livrosAtuais: Livro[] = JSON.parse(fs.readFileSync('livros.json'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais, null, 2));
}

function excluirLivro(id: number) {
    let livrosAtuais: Livro[] = JSON.parse(fs.readFileSync('livros.json'));
    const item = livrosAtuais.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(item, null, 2));
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    inserirLivro,
    modificaLivro,
    excluirLivro
}
