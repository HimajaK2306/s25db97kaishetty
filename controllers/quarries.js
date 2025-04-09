var Costume = require('../models/quarries');
// List of all Costumes
exports.quarries_list = function(req, res) {
res.send('NOT IMPLEMENTED: quarries list');
};
// for a specific Costume.
exports.quarries_list_detail = function(req, res) {
res.send('NOT IMPLEMENTED: quarries detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.quarries_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: quarries create POST');
};
// Handle Costume delete from on DELETE.
exports.quarries_delete = function(req, res) {
res.send('NOT IMPLEMENTED: quarries delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.quarries_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: quarries update PUT' + req.params.id);
};
