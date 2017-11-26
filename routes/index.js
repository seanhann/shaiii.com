var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});
*/
router.get('/info.jpg', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    res.sendFile(path.join(__dirname + '/info.jpg'));
});
router.get('/.well-known/acme-challenge/VezBVngpd_PRo3OIuwm9GzYBE10IDe6bI-n0cAecivk', function(req, res, next) {
    res.set('Content-Type', 'text/plain');
    res.send('teset');
    //res.send(path.join(__dirname + '/.well-known/acme-challenge/VezBVngpd_PRo3OIuwm9GzYBE10IDe6bI-n0cAecivk'));
    //res.send();
});
module.exports = router;
