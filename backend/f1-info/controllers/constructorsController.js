const Constructor = require('../models').constructors;
const Sequelize = require('sequelize');

module.exports = {

    getAllConstructors(req,res){
        return Constructor
            .findAll({
                attributes:{exclude:['createdAt','updatedAt']}
            })
            .then(constructor => {
                res.status(200).json(constructor);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            });
    },
    getConstructorFromARace(req,res){
        return Constructor
            .findAll({
                raw:true,
                attributes:{exclude:['createdAt','updatedAt']},
                where:{
                    constructorId:{
                        [Sequelize.Op.in]: req.body.constructorId
                    }
                }
            })
            .then(constructor => {
                res.status(200).json(constructor);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}