const ContaValidation = async(req, res, next) => {
    const { descricao, valor } = req.body

    if(!descricao){
        return res.status(400).json({error: 'Descrição é Obrigatória'})
    } else if(!valor){
        return res.status(400).json({ error: 'Valor é Obrigatória' })
    }else{
        next();
    }

}

module.exports = ContaValidation