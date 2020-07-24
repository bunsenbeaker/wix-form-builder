const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require("./src/server/routes")

connectDB('mongodb://localhost/formbuilder');
initServer();

function connectDB(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
       
    // Added check for DB connection
    if(!mongoose.connection) {
        console.log("Error connecting db")
    }else{
        console.log("Connected to MongoDB successfully")
    }
}

function initServer(){
    const app = express();

    app.use(bodyParser.urlencoded({
        extended: false
     }));
    app.use(bodyParser.json());
    setRoutes(app);
   
    const port = process.env.PORT || 8080;
    app.listen(port , function () {
         console.log("Running wix-form-builder server on port " + port);
    });
}

function setRoutes(app) {
    app.use('/api', apiRoutes);
}

