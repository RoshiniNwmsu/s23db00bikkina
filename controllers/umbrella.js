var umbrella = require('../models/umbrella');
// List of all umbrella
// List of all umbrella
exports.umbrella_list = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.send(theumbrella);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*exports.umbrella_list = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella list');
};*/
// Handle umbrella create on POST.
exports.umbrella_create_post = async function(req, res) {
    console.log(req.body)
    let document = new umbrella();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"umbrella_type":"goat", "cost":12, "size":"large"}
    document.color = req.body.color;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific umbrella.
/*
exports.umbrella_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id);
};*/

// for a specific umbrella.
exports.umbrella_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await umbrella.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle umbrella create on POST.
/*exports.umbrella_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella create POST');
};*/
// Handle umbrella delete form on DELETE.
exports.umbrella_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id);
};
// Handle umbrella update form on PUT.
/*exports.umbrella_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella update PUT' + req.params.id);
};*/

//Handle umbrella update form on PUT.
exports.umbrella_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await umbrella.findById( req.params.id)
// Do updates of properties
if(req.body.color) toUpdate.color = req.body.color;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.umbrella_view_all_Page = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.render('umbrella', { title: 'umbrella Search Results', results: theumbrella });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };