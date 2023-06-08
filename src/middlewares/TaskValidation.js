const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    const {macaddress, type, title, description, when } = req.body;

    if(!macaddress){
        return res.status(400).json({ error: 'O MacAddress é obrigatório!' });
    } else if (!type) {
        return res.status(400).json({ error: 'O Type é obrigatório!'});
    } else if (!title) {
        return res.status(400).json({ error: 'O Titulo é obrigatório!'});
    } else if(!description){
        return res.status(400).json({ error: 'Descrição é obrigatória!'});
    } else if(isPast(new Date(when))){
        return res.status(400).json({ error: 'Escolha data futura!'});
    } else{
        next();
    }
}

module.exports = TaskValidation;