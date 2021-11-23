const Driver = require('../models').drivers;

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
    }
}