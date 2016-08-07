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
  var moduleList= url.split("?")[2];
  var modules = moduleList.split(',');
  var mods = []
  for(var i = 0; i<modules.length; i++){
    mods.push(require(modules[i]));
  }
  var par = new Parse(mods,func);
  var resu = par.run();
  res.format({
    'text/plain': function(){
      res.send(resu.toString());
    }
  })
});

router.get('/services/funcList/', function(req, res, next) {
  console.log("hi russell")
    var url = req.url;
  var moduleList= url.split("?")[1];
  console.log(moduleList);
  var modules = moduleList.split(',');
  var functions = []
  for(var i = 0; i<modules.length; i++){
    functions.push(require(modules[i]).exposedFunctions);
  }
  res.format({
    'text/plain': function(){
      res.send([].concat.apply([], functions).join('|'));
    }
  })
});

module.exports = router;
