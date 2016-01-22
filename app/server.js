var express = require('express');
app = express();
var converter = require('./converter')

app.get('/rgbToHex', function(req, res) {
    var red = parseInt(req.query.red);
    var green = parseInt(req.query.green);
    var blue = parseInt(req.query.blue);
    var hex = converter.rgbToHex(red, green, blue);
    res.send(hex);
});

app.get('/hexToRgb', function(req, res) {
    var rgb = converter.hexToRgb(req.query.hex);
    res.send(JSON.stringify(rgb));
});

app.listen(3000);
