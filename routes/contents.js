var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
  var url = req.url.substring(1, req.url.length);
  res.render(url);
});

module.exports = router;
