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
exports.snakes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: snakes create POST');
};
// Handle snakes delete form on DELETE.
exports.snakes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: snakes delete DELETE ' + req.params.id);
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
    thesnakes = await Costume.find();
    res.render('snakes', { title: 'snakes Search Results', results: thesnakes });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};

