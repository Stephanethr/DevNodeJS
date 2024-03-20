var http = require('http');
var url = require('url');
var date = require('./date');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write('La date est et l heure sont : ' + date.myDateTime());
        res.write('<br>');
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.write(txt);
        res.write('<br>');
        res.end();
    })
}).listen(8080);