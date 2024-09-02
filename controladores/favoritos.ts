import { Request, Response } from 'express';
const { getTodosFavoritos, deleteFavoritosId, inserirFavoritos } = require('../servicos/favoritos'); // Ajuste o caminho para o módulo corretamente


function getFavoritos(req: Request, res: Response) {
    try {
        const livrosFavoritos = getTodosFavoritos()
        res.send(livrosFavoritos)
    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}

function postFavorito(req: Request, res: Response) {
    try {
        const id = req.params.id;
        inserirFavoritos(id)
        res.status(201);
        res.send("Inserção favoritos Concluida!")
        
    } catch (error) {
        res.status(500);
        res.send((error as Error).message);
    }
}


function deleteFavoritoID(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deleteFavoritosId(id)
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
    getFavoritos,
    postFavorito,
    deleteFavoritoID
}