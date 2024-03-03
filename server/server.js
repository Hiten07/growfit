const express = require('express');
const app = express();
const router = require('./routers/auth-router');


// Mount the router :  To use the router in your main express app, you can "mount" it 
// at a specific URL prefix

app.use("/api/auth",router);

// app.get("/",(req,res) => {
//         res.status(200).send("Welcome !");
// })


// app.get("/register",(req,res) => {
//     res.status(200).send("Welcome register !");
// })

const PORT = 5000;
app.listen(PORT, () => {
        console.log(`Server is running at Port : ${PORT}`);
})