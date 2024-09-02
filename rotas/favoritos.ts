import { Router } from 'express';
const {getFavoritos, postFavorito, deleteFavoritoID} = require('../controladores/favoritos')

const router = Router()

router.get('/', getFavoritos);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavoritoID);

module.exports = router
