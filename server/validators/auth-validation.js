const { z } = require('zod');

// register schema

const registerSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be of alteast 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),

    number: z
    .string({required_error: "Number is required"})
    .trim()
    .min(10, {message: "Phone number should have 10 digits..."}),
    
    email: z
    .string({required_error: "Name is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be of alteast 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    
    password: z
    .string({required_error: "Name is required"})
    .min(3, {message: "Password must be of alteast 3 characters"})
    .max(1024, {message: "Password must not be more than 255 characters"}),
})

module.exports = registerSchema;