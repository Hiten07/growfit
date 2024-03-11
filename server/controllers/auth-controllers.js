// action is the description of what you want to do 
// and dispatch is the function that carries that task.
const registeredUsers = require('../models/register-schema');

const home = async (req,res) => {
    try {
        res
        .status(200)
        .json("from home controller");
    } catch (error) {
        res
        .status(400)
        .json({msg: "something went wrong"});
    }
} 

const register = async (req,res,next) => {
    try {

        // getting the data from registeration form
        const {username,email,phone,userType,password,cpassword} = req.body;

        // checking if user is already available or not
        const userExists = await registeredUsers.findOne({ email });

        if(userExists) {
           return res.status(400).send({msg: "email already exists"});
        }

        // creating new user in our collection
        const userCreated = await registeredUsers.create({username,email,phone,userType,password,cpassword});

        res
        .status(201)
        .json(
            {msg: "user registeration successfully", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()    
        });
    } catch (error) {
        res.status(500).json({msg: "internal server error"});
        // next(error);

    }
}

const login = async (req,res) => {
        try {

            // getting data from login form
            const {email,password} = req.body;

            const userExists = await registeredUsers.findOne({email});

            if(!userExists) {
                return res.status(400).json({msg: "Invalid credientials"});
            }

            const user = await userExists.comparePassword(password,userExists.password);

            if(user) {
                res
                .status(200)
                .json(
                {
                    msg: "user login successfully", 
                    token: await userExists.generateToken(),
                    userId: userExists._id.toString()    
                });
            }
            else {
                res.status(401)
                .json({msg: "Invalid email or password"});
            }
        } catch (error) {
            res
            .status(500)
            .json({msg: "Internal server error"});
        }
};

module.exports = {home, register, login};

// authentication or authorization

// converting _id to string is good practice bcoz it ensures compatilbility and 
// consistency across different JWT libraries system 