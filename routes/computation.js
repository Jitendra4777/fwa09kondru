var express = require('express');
var router = express.Router();
var value=Math.round(Math.random()*100);

var a=Math.fround(value) ;
 
var b= Math.random(value);
var  c=Math.round(value);
/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(`[Math.fround] applied to [${value}] is [${a}]<br>[Math.random] applied to [${value}] is [${b}]<br>[Math.round] applied to [${value}] is [${c}] `);

});

module.exports = router;
