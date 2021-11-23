const Circuit = require('../models').circuits;
const Sequelize = require('sequelize');

module.exports = {

    getAllCircuits(req,res){
        // if(req){
        //     return Circuit
        //         .findAll({
        //             attributes:{exclude:['createdAt','updatedAt']},
        //             where:{
        //                 country:req.params.country
        //             }
        //         })
        //         .then(circuit => {
        //             res.status(200).json(circuit);
        //         })
        //         .catch(error => {
        //             res.status(500).send({message:error.message});
        //         });
        // }
        return Circuit
        .findAll({
            attributes:{exclude:['createdAt','updatedAt']},
        })
        .then(circuit => {
            res.status(200).json(circuit);
        })
        .catch(error => {
            res.status(500).send({message:error.message});
        });

    },

    getCountrys(req,res){
        return Circuit
            .findAll({
                attributes:[Sequelize.fn('DISTINCT', Sequelize.col('country')) ,'country']
            })
            .then(country => {
                res.status(200).json(country);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    },

    getCircuitsByCountry(req,res){
        return Circuit
            .findAll({
                attributes:{
                    exclude:['createdAt','updatedAt'],
                    // include: [[Sequelize.fn("COUNT", Sequelize.col("name")), "nameCount"]]
                },
                where:{
                    country:req.body.Country
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