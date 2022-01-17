const LapTimes = require("../models").laptimes;
const Driver = require("../models").drivers;
const Sequelize = require('sequelize');


module.exports = {
    getLapTimesByRace(req,res){
        return LapTimes
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt','position','milliseconds'],
                },
                order:[[
                    'lap','ASC'
                ]],
                where:{
                    raceId:req.params.raceId,
                    driverId:req.body.Drivers,
                },
                include:[
                    {
                        model:Driver,
                        as:'drivers',
                        attributes:{
                            exclude:['createdAt','updatedAt','dob','driverRef','forename','nationality','number','surname','url'],
                        },
                    },
                ],
            })
            .then(lapTimes => {
                res.status(200).json(lapTimes);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}