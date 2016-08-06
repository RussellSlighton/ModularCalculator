var express = require('express');
var router = express.Router();
var Base = require('base');
var Parse = require('parser');

module.exports.Parser;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Modular Calculator' });
});

router.get('/services/calculate/', function(req, res, next) {
  var url = req.url;
  var func= url.split("?")[1];
  var par = new Parse([Base],func);
  var resu = par.run();
  console.log(resu);
  res.send(func);
});

module.exports = router;
