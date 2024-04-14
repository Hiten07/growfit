const jwt = require('jsonwebtoken');
const users= require('../models/register-schema');

const authMiddleware = async (req,res,next) => {
        const token = req.header("Authorization");

        if(!token) {
            return res.status(400).json({message: "unauthorized HTTP, token not provided"});
        }

        const jwtToken = token.replace('Bearer',"").trim(); 
        console.log("token form auth middleware", jwtToken);
        
        try {
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
            const userData = await users.findOne({email: isVerified.email}).select({
                password: 0,
            });
            console.log(userData);

            // in express, req object contains information about the HTTP request.

            // passing custom properties to req object to our auth-controller (i.e. => user route handler)
            req.user = userData;
            req.token = token,
            req.userId = userData._id;

            next();
        } catch (error) {
            return res.status(401).json({msg: "Unauthorized. Invalid Token"});
        }
        next();
    } 
module.exports = authMiddleware;