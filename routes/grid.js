var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('grid', { title: "Grid Display" });
});

module.exports = router;
