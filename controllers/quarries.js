var quarries = require('../models/quarries');
// List of all Costumes
//exports.quarries_list = function(req, res) {
//res.send('NOT IMPLEMENTED: quarries list');
//};
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
//exports.quarries_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: quarries create POST');
//};
// Handle Costume create on POST.
exports.quarries_create_post = async function(req, res) {
console.log(req.body)
let document = new quarries();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.quarries_type = req.body.quarries_type;
document.depth_meters = req.body.depth_meters;
document.material = req.body.material;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
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
exports.quarries_view_all_Page = async function(req, res) {
try{
thequarries = await quarries.find();
res.render('quarries', { title: 'quarries Search Results', results: thequarries });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// GET request for one costume.

// for a specific Costume.
exports.quarries_list_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await quarries.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};