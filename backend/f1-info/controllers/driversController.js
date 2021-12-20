const Driver = require('../models').drivers;
const Sequelize = require('sequelize');

module.exports = {

    getAllDrivers(req,res){
        return Driver
            .findAll({
                attributes:{exclude:['createdAt','updatedAt']}
            })
            .then(driver => {
                res.status(200).json(driver);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            });
    },

    getDriversFromARace(req,res){
        return Driver
            .findAll({
                attributes:{exclude:['createdAt','updatedAt']},
                where:{
                    driverId:req.body.driverId
                }
            })
            .then(driver => {
                res.status(200).json(driver);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}