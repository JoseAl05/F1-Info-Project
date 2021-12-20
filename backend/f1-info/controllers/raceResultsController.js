const RaceResults = require('../models').results;
const Status = require('../models').status;
const Driver = require('../models').drivers
const Sequelize = require('sequelize');

module.exports = {
    getRaceResults(req,res){
        return RaceResults
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
                        model:Status,
                        as:'status',
                        attributes:{
                            exclude:['createdAt','updatedAt'],
                        },
                    },
                    {
                        model: Driver,
                        as:'drivers',
                        attributes:{
                            exclude:['createdAt','updatedAt'],
                        },
                    }
                ]
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getWins(req,res){
        return RaceResults
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
    },
    getPodiums(req,res){
        return RaceResults
            .findAndCountAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    driverId:req.body.Driver,
                    position:[1,2,3]
                }
            })
            .then(podiums => {
                res.status(200).json(podiums.count);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getNumberOfRacesScored(req,res){
        return RaceResults
            .findAndCountAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    driverId:req.body.Driver,
                    points:{
                        [Sequelize.Op.ne]:[0]
                    }
                }
            })
            .then(scored => {
                res.status(200).json(scored.count);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getNumberOfPoles(req,res){
        return RaceResults
            .findAndCountAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    driverId:req.body.Driver,
                    grid:1
                }
            })
            .then(poles => {
                res.status(200).json(poles.count);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getTotalPointsByDriver(req,res){
        return RaceResults
            .findAll({
                attributes:{
                    include: [[Sequelize.fn("SUM", Sequelize.col("points")), "totalPoints"]],
                    exclude:[
                        'createdAt',
                        'updatedAt',
                        'resultId',
                        'raceId',
                        'driverId',
                        'constructorId',
                        'number',
                        'grid',
                        'position',
                        'positionText',
                        'positionOrder',
                        'points',
                        'laps',
                        'time',
                        'milliseconds',
                        'fastestLap',
                        'rank',
                        'fastestLapTime',
                        'fastestLapSpeed',
                        'statusId'
                    ],
                },
                where:{
                    driverId:req.body.Driver,
                }
            })
            .then(points => {
                res.status(200).json(points);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getLapsCompleted(req,res){
        return RaceResults
            .findAll({
                attributes:{
                    include: [[Sequelize.fn("SUM", Sequelize.col("laps")), "totalLaps"]],
                    exclude:[
                        'createdAt',
                        'updatedAt',
                        'resultId',
                        'raceId',
                        'driverId',
                        'constructorId',
                        'number',
                        'grid',
                        'position',
                        'positionText',
                        'positionOrder',
                        'points',
                        'laps',
                        'time',
                        'milliseconds',
                        'fastestLap',
                        'rank',
                        'fastestLapTime',
                        'fastestLapSpeed',
                        'statusId'
                    ],
                },
                where:{
                    driverId:req.body.Driver,
                }
            })
            .then(laps => {
                res.status(200).json(laps);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },
    getTotalRaces(req,res){
        return RaceResults
            .findAndCountAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    driverId:req.body.Driver,
                }
            })
            .then(races => {
                res.status(200).json(races.count);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}