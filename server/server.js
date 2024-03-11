require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./routers/auth-router');
const connectDb = require('./utils/dbconfig');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Mount the router :  To use the router in your main express app, you can "mount" it 
// at a specific URL prefix

app.use("/api/auth",authRoute);
app.use(errorMiddleware);

// app.get("/",(req,res) => {
//         res.status(200).send("Welcome !");
// })


// app.get("/register",(req,res) => {
//     res.status(200).send("Welcome register !");
// })

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port : ${PORT}`);
});
});


