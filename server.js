const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const apiRoutes = require("./src/server/routes")


dotenv.config();


connectDB();
initServer();

function connectDB() {

    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true});
       
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
    app.use(express.static(__dirname + '/dist/wix-form-builder'));

    setRoutes(app);
   
    const port = process.env.PORT || 8080;
    app.listen(port , function () {
         console.log("Running wix-form-builder server on port " + port);
    });
}

function setRoutes(app) {
    app.use('/api', apiRoutes);
    app.get('/*', function(req,res) {
        res.sendFile(path.join(__dirname+'/dist/wix-form-builder/index.html'));});
}