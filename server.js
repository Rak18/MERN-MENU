require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.status(200).send("server connected");
})

//Define Routes
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`)
})
//Bring here mongoDB module here
connectDB();