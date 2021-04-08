var snakes = require('../models/snakes');
// List of all snakes
exports.snakes_list = async function(req, res) {
    try{
    thesnakes = await snakes.find();
    res.send(thesnakes);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific snakes.
exports.snakes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: snakes detail: ' + req.params.id);
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
exports.snakes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: snakes update PUT' + req.params.id);
};
