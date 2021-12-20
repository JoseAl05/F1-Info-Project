const DriverStandings = require('../models').driverStandings;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getWins(req,res){
        return DriverStandings
            .findAndCountAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    driverId:req.body.Driver,
                    position:1
                }
            })
            .then(wins => {
                res.status(200).json(wins.count);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}