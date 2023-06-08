
const UserValidation = async(req, res, next) => {
    const { nome, email, senha } = req.body;

    if(!nome){
        return res.status(400).json({error: 'Não posso gravar sem o nome valido!'})
    } else if(!email){
        return res.status(400).json({error: 'Não posso gravar sem o email valido!'})
    } else if(!senha) {
        return res.status(400).json({error: 'Não posso gravar sem o senha valida!'})
    }else{
        next();
    }
}

module.exports = UserValidation;