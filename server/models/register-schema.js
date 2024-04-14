const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true
    },

    userType: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    },

});


// pre function works as middleware
// it tells in first parameter that before saving the data, execute the pre function
registerSchema.pre("save", async function (next) {

        // this keyword will return all the data 
        const user = this;

        // checking if password is modified or not 
        if(!user.isModified("password")) {
            next();
        }
        try {
                const salt = await bcrypt.genSalt(10);
                const hashed_password = await bcrypt.hash(user.password,salt);
                const hashed_cpassword = await bcrypt.hash(user.cpassword,salt);
                user.password = hashed_password;  
                user.cPassword = hashed_cpassword; 
        } catch (error) {
            next(error);
        }
});

// json web token
// stored in client side

registerSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, {
            expiresIn:"1d",
        }
        );
    } catch (error) {
        console.log(error);
    }
}

registerSchema.methods.comparePassword = function (password) { 
       return bcrypt.compare(password,this.password);
}


// defining the collection (table) name for the user in the database
const registeredUsers = new mongoose.model("User",registerSchema); 
module.exports = registeredUsers;