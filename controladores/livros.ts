import { Request, Response } from 'express';
const { getTodosLivros, getLivroPorId, inserirLivro, modificaLivro, excluirLivro } = require('../servicos/livros'); // Ajuste o caminho para o módulo corretamente


function getLivros(req: Request, res: Response) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

function getLivro(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id); // Certifique-se de converter o id para número

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }

    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

function postLivro(req: Request, res: Response) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            inserirLivro(livroNovo)
            res.status(201);
            res.send("Inserção Concluida!")
        } else {
            res.status(422)
            res.send("O campo (nome) é obrigatório")
        }

    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

function editLivro(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id); // Certifique-se de converter o id para número

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(id, body)
            res.send("Alteração Concluida!")
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }
    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

function deleteLivro(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        if (id && Number(id)) {
            excluirLivro(id)
            res.send("Exclusão Concluida!")
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }
    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    editLivro,
    deleteLivro
}