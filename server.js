
// Dependencies
var express = require("express");
var path = require("path");
var nodemailer = require("nodemailer");
// =============================================================

// Ports and Express app
var app = express();
var PORT = 8080;
//=============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//=============================================================

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

//A post request for NODEMAILER https://nodemailer.com/about/
app.post('/booking.html', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sanchezboysmom@gmail.com',
            pass: ''
        }
    })
    var mailOptions = {
        from: 'Luz Sanchez <sanchezboysmom@gmail.com>',
        to: 'sanchezboysmom@gmail.com',
        subject: 'Date Submission',
        text: 'You have a date submission with the following details... Name: ' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You have a date submission with the following details...</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.redirect('/')
        } else {
            console.log('Message Sent: ' + info.response)
            res.redirect('/')
        }
    })
})


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
});
