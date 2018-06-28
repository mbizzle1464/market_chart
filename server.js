// Require Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan'); // for debugging
var app = express();
const PORT = process.env.PORT || 3000;

// Initialize Express for debugging & body parsing
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Serve Static Content
app.use(express.static(process.cwd() + '/public'));


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
