const ContaModel = require('../model/ContaModel')

class ContaController{
    async create(req, res) {
        const conta = new ContaModel(req.body);

        await conta
            .save()
            .then( response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}
module.exports = new ContaController()