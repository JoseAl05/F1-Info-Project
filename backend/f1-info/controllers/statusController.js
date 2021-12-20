const Status = require('../models').status;
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = {
    getStatus(req,res){
        return Status
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    statusId:req.body.statusId
                },
                raw:true,
            })
            .then(status => {
                res.status(200).json(status)
            })
            .catch(error => {
                res.status(500).send({message:error.message})
            })
    }
}