var express = require('express');
var router = express.Router();
var Base = require('base');
var Aerospace = require('aerospace');
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
  res.format({
    'text/plain': function(){
      res.send(resu.toString());
    }
  })
});

router.get('/services/funcList/', function(req, res, next) {
  var url = req.url;
  var moduleList= url.split("?")[1];
  var modules = moduleList.split(',');
  var functions = []
  for(var i = 0; i<modules.length; i++){
    functions.push(require(modules[i]).exposedFunctions);
  }
  console.log(functions);
  res.format({
    'text/plain': function(){
      res.send([].concat.apply([], functions));
    }
  })
});

module.exports = router;
