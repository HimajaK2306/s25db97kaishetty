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
//router.get('/quarries/:id', quarries_controllers.quarries_update_put);
//router.delete('/quarries/:id', quarries_controller.quarries_delete);
router.get('/detail', quarries_controllers.quarries_view_one_Page);
router.get('/create', quarries_controllers.quarries_create_Page);
router.get('/update', quarries_controllers.quarries_update_Page);
router.get('/delete', quarries_controllers.quarries_delete_Page);

module.exports = router;


module.exports = router;