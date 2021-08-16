const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
// confirguring so that we have our environment variable in .env file

const app = express();
const port = process.env.PORT || 5000;
// creating express server

app.use(cors());
// cors middleware
app.use(express.json());
// this will allow us to parse json because our server will be recieving and sending data in JSON from

const uri = process.env.ATLAS_URI;
// uri of the database
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// connecting to our database

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')
// Here we r importing route files

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)
// whenever someone goes to our route URL and extend that URL with /exercises or /users its going to load everything in our exerciseRoute or userRoute

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// when the server is running on this port this function description is executed