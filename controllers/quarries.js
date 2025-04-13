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
// Handle Costume delete on DELETE.
exports.quarries_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await quarries.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle a show one view with id specified by query
exports.quarries_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        let result = await quarries.findById(req.query.id);
        if (!result) {
            res.status(404).send("No quarry found with this ID");
            return;
        }
        res.render('quarriesdetail', { title: 'Quarry Detail', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.quarries_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('quarriescreate', { title: 'quarries Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a costume.
// query provides the id
exports.quarries_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id);
    try {
        let result = await quarries.findById(req.query.id);
        if (!result) {
            res.status(404).send("No quarry found with this ID to update");
            return;
        }
        res.render('quarriesupdate', { title: 'Quarry Update', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

    
// Handle a delete one view with id from query 
exports.quarries_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id);
    try {
        result = await quarries.findById(req.query.id);
        res.render('quarriesdelete', { title: 'quarries Delete', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
   



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

exports.quarries_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await quarries.findById( req.params.id)
    // Do updates of properties
    if(req.body.quarries_type)
    toUpdate.quarries_type = req.body.quarries_type;
    if(req.body.depth_meters) toUpdate.depth_meters = req.body.depth_meters;
    if(req.body.material) toUpdate.material = req.body.material;
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;
    
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    
    
    