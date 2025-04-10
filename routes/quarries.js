var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('quarries', { title: 'Search Results - Quarries' });
});


// var express = require('express');
const quarries_controllers= require('../controllers/quarries');
var router = express.Router();
/* GET costumes */
router.get('/', quarries_controllers.quarries_view_all_Page );
router.get('/quarries/:id', quarries_controllers.quarries_list_detail);
router.put('/quarries/:id', quarries_controllers.quarries_update_put);

module.exports = router;


module.exports = router;