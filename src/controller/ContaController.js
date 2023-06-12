const ContaModel = require('../model/ContaModel')

const {
    startOfMonth, endOfMonth,
    startOfYear, endOfYear
} = require('date-fns')

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
    async all(_, res) {
        await ContaModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async allById(req, res) {
        await ContaModel.find({ '_id': req.params.id } )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async delete(req, res){
        await ContaModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async month(req, res) {
        await UserModel
            .find({
                'vencimento': { '$in': req.params.vencimento },
                'when': {
                    '$gte': startOfMonth(current),
                    '$lt': endOfMonth(current)
                }
            })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}
module.exports = new ContaController()