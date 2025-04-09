var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('quarries', { title: 'Search Results - Quarries' });
});


var express = require('express');
const quarries_controlers= require('../controllers/quarries');
var router = express.Router();
/* GET costumes */
router.get('/', quarries_controlers.quarries_view_all_Page );
module.exports = router;
module.exports = router;