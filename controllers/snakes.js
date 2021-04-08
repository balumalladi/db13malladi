var snakes = require('../models/snakes');
// List of all Costumes
exports.snakes_list = function(req, res) {
res.send('NOT IMPLEMENTED: snakes list');
};
// for a specific Costume.
exports.snakes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: snakes detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.snakes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: snakes create POST');
};
// Handle Costume delete form on DELETE.
exports.snakes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: snakes delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.snakes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: snakes update PUT' + req.params.id);
};
