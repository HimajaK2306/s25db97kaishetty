var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var quarries_controller = require('../controllers/quarries');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/quarries', quarries_controller.quarries_create_post);
// DELETE request to delete Costume.
router.delete('/quarries/:id', quarries_controller.quarries_delete);
// PUT request to update Costume.
router.put('/quarries/:id', quarries_controller.quarries_update_put);
// GET request for one Costume.
router.get('/quarries/:id', quarries_controller.quarries_list_detail);
// GET request for list of all Costume items.
router.get('/quarries', quarries_controller.quarries_list);
module.exports = router;
