const LapTimes = require("../models").laptimes;
const Driver = require("../models").drivers;
const Sequelize = require('sequelize');


module.exports = {
    getLapTimesByRace(req,res){
        return LapTimes
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt','milliseconds'],
                },
                // order:[[
                //     'lap','ASC'
                // ]],
                where:{
                    raceId:req.params.raceId,
                    driverId:req.body.Drivers,
                    lap:{
                        [Sequelize.Op.between]: req.body.lap
                    }
                },
                include:[
                    {
                        model:Driver,
                        as:'drivers',
                        attributes:{
                            exclude:['createdAt','updatedAt','dob','driverRef','forename','nationality','number','surname','url'],
                        },
                        order:[[
                            'code','ASC'
                        ]],
                    },
                ],
            })
            .then(lapTimes => {
                res.status(200).json(lapTimes);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    countDrivers(req,res){
        return LapTimes
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt','milliseconds'],
                },
                order:[[
                    'lap','ASC'
                ]],
                where:{
                    raceId:req.params.raceId,
                    driverId:req.body.Drivers,
                    lap:{
                        [Sequelize.Op.between]: req.body.lap
                    }
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
                group:['driverId','code']
            })
            .then(drivers => {
              res.status(200).json(drivers);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getLapTimesByRaceTest(req,res){
        return LapTimes
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt','milliseconds'],
                },
                // order:[[
                //     'lap','ASC'
                // ]],
                where:{
                    raceId:req.params.raceId,
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
    },
    getLapsOfRace(req,res){
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
            })
    }
}