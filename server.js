const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./database/routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// Add routes, both API and view
// app.use(routes);
require("./database/routes/portfolio.js")(app);
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI ||
    require("./secrets").MONGODB_ENDPOINT
);
var db = mongoose.connection;
db.once('open', function () {
    console.log('Mongoose connection successful.');
});
// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
