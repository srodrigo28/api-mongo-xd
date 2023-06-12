const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ContaSchema = new Schema({
    descricao: { 
        type: String, required: true 
    },
    valor: { 
        type: String, required: true 
    },
    vencimento: { type: Date, default: Date.now()},
    
    data_criacao: { type: Date, default: Date.now()},
})

module.exports = mongoose.model('Conta', ContaSchema);