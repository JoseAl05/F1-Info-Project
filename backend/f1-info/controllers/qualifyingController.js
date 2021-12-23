const Qualify = require("../models").qualifying;
const Race = require("../models").races;
const Driver = require("../models").drivers;
const Sequelize = require("sequelize");

module.exports = {
    getQualifySession(req,res){
        return Qualify
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                },
                where:{
                    raceId:req.params.raceId,
                },
                include:[
                    {
                        model:Race,
                        as:'races',
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
            .then(qualy => {
                res.status(200).json(qualy);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}