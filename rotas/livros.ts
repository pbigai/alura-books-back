import { Router } from 'express';
const {getLivros, getLivro, postLivro, editLivro, deleteLivro} = require('../controladores/livros')

const router = Router()


router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', editLivro);

router.delete('/:id', deleteLivro);

module.exports = router
