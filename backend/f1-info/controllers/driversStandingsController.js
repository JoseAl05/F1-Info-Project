const DriverStandings = require('../models').driverStandings;
const Driver = require('../models').drivers;
const Race = require('../models').races;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getDriverStandingsByRace(req,res){
        return DriverStandings
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                order:[[
                    'driverId','ASC'
                ]],
                where:{
                    raceId:req.params.raceId,
                },
                include:[
                    {
                        model:Driver,
                        as:'drivers',
                        attributes:{
                            exclude:['createdAt','updatedAt'],
                        },
                    },
                    {
                        model: Race,
                        as:'races',
                        attributes:{
                            exclude:['createdAt','updatedAt'],
                        },
                    }
                ]
            })
            .then(driverStanding => {
                res.status(200).json(driverStanding);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
        }
}