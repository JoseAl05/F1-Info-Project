const User = require('../models').user;
require('dotenv').config();
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);



module.exports = {
    registerAUser(req,res){
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        return User
            .create({
                username:req.body.username,
                password: hashedPassword,
                email:req.body.email,
                first_name:req.body.first_name,
                surname:req.body.surname,
            })
            .then(user => {
                res.status(200).json(user);
            })
            .catch(error => {
                res.status(500).send({message:error.message});
            })
    }
}