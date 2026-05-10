const express = require('express');
const { getAlunos, getAlunoById, createAluno, deleteAluno } = require('./controllers/alunos');

const router = express();

router.get('/alunos', getAlunos);
router.get('/alunos/:id', getAlunoById);
router.post('/alunos', createAluno);
router.delete('/alunos/:id', deleteAluno);

module.exports = router;