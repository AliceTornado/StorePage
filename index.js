const express = require('express');
const path = require('path');
const app = express();

app.use('/lib', express.static('node_modules/'));
app.use('/css', express.static('css/'));

app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'));