const User = require('../models').user;

checkDuplicateUsername = (req,res,next) => {
    return User
        .findOne({
            where:{
                username:req.body.username
            }
        })
        .then(user => {
            if(user){
                res.status(400).json({
                    message:'Username already in use'
                });
                return;
            }
            next();
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

checkDuplicateEmail = (req,res,next) => {
    return User
        .findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            if(user){
                res.status(400).json({
                    message:'Email already in use'
                });
                return;
            }
            next();
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const verifySignUp = {
    checkDuplicateUsername: checkDuplicateUsername,
    checkDuplicateEmail: checkDuplicateEmail
};
module.exports = verifySignUp;