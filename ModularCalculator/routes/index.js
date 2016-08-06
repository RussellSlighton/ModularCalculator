var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Modular Calculator' });
});
router.get('/services/calculate/', function(req, res, next) {
  res.render('index')
  next();
});
router.get('/services/logic/module/', function(req, res, next) {
  res.send()
});

module.exports = router;
