const alunos = require('../data/alunos');

let idCounter = 1;

const getAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const getAlunoById = (req, res) => {
    const idReq = Number(req.params.id);

    if (isNaN(idReq)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const aluno = alunos.find((aluno) => aluno.id === idReq);

    if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    return res.status(200).json(aluno);
};

const createAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ message: 'Dados incompletos' });
    }

    const novoAluno = {
        id: idCounter,
        nome,
        sobrenome,
        idade,
        curso
    };

    idCounter++;

    alunos.push(novoAluno);
    return res.status(201).json(novoAluno);
};

const deleteAluno = (req, res) => {
    const idDelete = Number(req.params.id);

    if (isNaN(idDelete)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const alunoIndex = alunos.findIndex((aluno) => aluno.id === idDelete);

    if (alunoIndex === -1) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const alunoRemoved = alunos.splice(alunoIndex, 1);
    return res.status(200).json(alunoRemoved);
};

module.exports = {
    getAlunos,
    getAlunoById,
    createAluno,
    deleteAluno
};