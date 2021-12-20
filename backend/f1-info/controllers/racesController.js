const Race = require('../models').races;
const Sequelize = require('sequelize');

module.exports = {
    getARace(req,res){
        return Race
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                    // include: [[Sequelize.fn("COUNT", Sequelize.col("name")), "nameCount"]]
                },
                where:{
                    circuitId:req.body.Circuit,
                }
            })
            .then(circuit => {
                res.status(200).json(circuit);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}