const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require("./src/server/routes")

// Initialize the app
const app = express();


app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());
app.use('/api', routes);


dotenv.config();

const uri = `mongodb://localhost/formbuilder`;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


// Setup server port
const port = process.env.PORT || 8080;
// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running FormBuilder Backend on port " + port);
});