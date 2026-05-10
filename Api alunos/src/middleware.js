const validaSenha = (req, res, next) => {
    const { senha } = req.query;

    if (senha !== 'Lz123456') {
        return res.status(401).json({ message: 'Senha incorreta' });
    }

    next();
};

module.exports = validaSenha;