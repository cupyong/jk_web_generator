var path = require('path');
var express = require('express');
var app = new express();

var port = 9999;

console.log(path.join(__dirname, '/dist'))
app.use(express.static(path.join(__dirname, '/dist')));


app.get("/*", function(req, res) {
    return res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port, function(err) {
    if (err) {
        connsole.error(err)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})