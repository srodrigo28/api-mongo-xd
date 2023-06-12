const UserModel = require('../model/UserModel')

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
    async delete(req, res){
        await UserModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
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
    async allById(req, res) {
        await UserModel.find({ '_id': req.params.id } )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async update(req, res) {
        await UserModel.findById({ '_id': req.params.id }, req.body, {new:true} )
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new UserController();