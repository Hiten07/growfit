// schema.parseAsync(req.body) = point where you use zod to validate the request body data that is filled by user in form
// against the defined schema.

// if it is valid , it returns the value with full information , otherwise an error is thrown.


const validate = (schema) => async (req,res,next) => {
        try {
            const parseBody = await schema.parseAsync(req.body);
            req.body = parseBody;
            next();
        } catch (error) {
            const message = error.issues[0].message;
            console.log(message);
            res.status(400).json({msg: message});
        }
} 

module.exports = validate;