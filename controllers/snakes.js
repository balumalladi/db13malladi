var snakes = require('../models/snakes');
// List of all snakess
exports.snakes_list = async function(req, res) {
    try{
        thesnakes = await snakes.find();
        res.send(thesnakes);
        } catch(err){
          res.send(500,`{"error": ${err}}`);
        }
};
// for a specific snakes.
exports.snakes_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await snakes.findById( req.params.id)
        res.send(result)
    } catch (error) {
       res.status(500)
       res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle snakes create on POST.
exports.snakes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new snakes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"snakestype":"goat", "cost":12, "size":"large"}
    document.color = req.body.color;
    document.weight = req.body.weight;
    document.vitamins = req.body.vitamins;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle snakes delete form on DELETE.
exports.snakes_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await snakes.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle snakes update form on PUT.
exports.snakes_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await snakes.findById( req.params.id)
        // Do updates of properties
        if(req.body.snakename) toUpdate.snakename = req.body.snakename;
        if(req.body.habitat) toUpdate.habitat = req.body.habitat;
        if(req.body.classification) toUpdate.classification = req.body.classification;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};
// Handle a show all view
exports.snakes_view_all_Page = async function(req, res) {
    try{
    thesnakes = await snakes.find();
    console.log(thesnakes)
    res.render('snakes', { title: 'snakes Search Results', results: thesnakes });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.snakes_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await snakes.findById( req.query.id)
        res.render('snakesdetail', 
{ title: 'snakes Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a snakes.
// No body, no in path parameter, no query.
// Does not need to be async
exports.snakes_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('snakescreate', { title: 'snakes Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a snakes.
// query provides the id
exports.snakes_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await snakes.findById(req.query.id)
        res.render('snakesupdate', { title: 'snakes Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.snakes_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await snakes.findById(req.query.id)
        res.render('snakesdelete', { title: 'snakes Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





