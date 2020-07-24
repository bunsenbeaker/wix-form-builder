const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
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
    app.use(express.static(__dirname + '/dist/myapp'));

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