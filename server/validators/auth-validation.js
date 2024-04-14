const { z } = require('zod');

// register schema

const registerValidationSchema = z.object({
    username: z
    .string({required_error: "username is required"})
    .trim()
    .min(3, {message: "userame should have alteast 3 characters"})
    .max(255, {message: "username should have atmost 255 characters"}),
    
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email should have alteast 3 characters"})
    .max(255, {message: "Email should have atmost 255 characters"}),

    phone: z
    .number({required_error: "Phone Number is required"})
    .min(10, {message: "Phone number should have atleast 10 digits..."})
    .max(10, {message: "Phone number should have atmost 10 digits..."}),

    userType: z
    .string({required_error: "userType is required"}),
    
    password: z
    .string({required_error: "password is required"})
    .min(3, {message: "Password should have alteast 3 characters"})
    .max(1024, {message: "Password should have atmost 255 characters"}),

    cpassword: z
    .string({required_error: "confirm password is required"}) 
    .min(3, {message: "Password should have alteast 3 characters"})
    .max(1024, {message: "Password should have atmost 255 characters"}),
})

module.exports = registerValidationSchema;