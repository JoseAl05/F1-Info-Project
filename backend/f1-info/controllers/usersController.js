const User = require('../models').user;
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
    },

    login(req,res){
        User.findOne({
            where:{
                username:req.body.username
            }
        })
        .then(user => {
            // If user not exists //
            if(!user){
                return res.status(404).send({ message: "User Not found." });
            }

            // If user exists, compare the password //
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            // If password is invalid, token is not provided and returns an error//
            if (!passwordIsValid) {
                return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET, {
                expiresIn: "1h" // 1 hour
            });

            req.session.user = req.body.username;
            req.session.token = token;

            res.status(200).json({
                id:user.userId,
                username:user.username,
                email:user.email,
                accessToken:token
            })

        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
    }
}