var quarries = require('../models/quarries');
// List of all Costumes
exports.quarries_list = function(req, res) {
res.send('NOT IMPLEMENTED: quarries list');
};
exports.quarries_list = async function(req, res) {
    try{
    thequarries = await quarries.find();
    res.send(thequarries);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
//VIEWS
// Handle a show all view
exports.costume_view_all_Page = async function(req, res) {
try{
thequarries = await quarries.find();
res.render('quarries', { title: 'quarries Search Results', results: thequarries });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
