
// Dependencies
var express = require("express");
var path = require("path");
// =============================================================

// Ports
var app = express();
var PORT = 8080;
//=============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//=============================================================


// Routes
// =============================================================

// Basic route that sends the user first to the  Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/booking", function (req, res) {
    res.sendFile(path.join(__dirname, "booking.html"))
});

app.get("/videos", function (req, res) {
    res.sendFile(path.join(__dirname, "experience.html"))
});
//=============================================================

// add an api route // add another router // change the response

// =============================================================




// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
});
// =============================================================