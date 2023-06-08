const UserModel = require('../model/UserModel')

const UserValidation = async(req, res, next) => {
    const { nome, email, senha } = req.body;

    if(!nome){ return res.status(400).json({error: 'Não posso gravar sem o nome'})
    }else{ 
        next();
    }
}

module.exports = UserValidation;