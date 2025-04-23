var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('quarries', { title: 'Search Results - Quarries' });
});


// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};


// var express = require('express');
const quarries_controllers= require('../controllers/quarries');
var router = express.Router();
/* GET costumes */
router.get('/', quarries_controllers.quarries_view_all_Page );
router.get('/quarries/:id', quarries_controllers.quarries_list_detail);
//router.get('/quarries/:id', quarries_controllers.quarries_update_put);
//router.delete('/quarries/:id', quarries_controller.quarries_delete);
router.get('/detail', quarries_controllers.quarries_view_one_Page);
router.get('/create',secured, quarries_controllers.quarries_create_Page);
router.get('/update',secured, quarries_controllers.quarries_update_Page);
router.get('/delete',secured, quarries_controllers.quarries_delete_Page);



module.exports = router;


module.exports = router;
