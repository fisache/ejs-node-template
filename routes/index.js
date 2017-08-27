var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('dashboard');
});

router.get('/dashboard', function(req, res, next) {
  var url = req.url.substring(1, req.url.length);
  res.render("layout/layout", {title:'project', url:url, js:url + '.js'});
});

router.get('/charts', function(req, res, next) {
  var url = req.url.substring(1, req.url.length);
  res.render("layout/layout", {title:'project', url:url, js:url + '.js'});
});

router.get('/tables', function(req, res, next) {
  var url = req.url.substring(1, req.url.length);
  res.render("layout/layout", {title:'project', url:url, js:url + '.js'});
});

module.exports = router;
