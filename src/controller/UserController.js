const UserModel = require('../model/UserModel')

const {
    startOfMonth, endOfMonth,
    startOfYear, endOfYear
} = require('date-fns')

class UserController{
    async create(req, res){
        const user = new UserModel(req.body);

        await user
            .save()
            .then( response => {
                return res.status(200).json(response);
            })
            .catch(error => {
             return res.status(500).json(error);
            })
    }
    async all(_, res) {
        await UserModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async delete(req, res){
        await UserModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}

module.exports = new UserController();