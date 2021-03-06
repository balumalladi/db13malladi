var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var snakes_controller = require('../controllers/snakes');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/snakes', snakes_controller.snakes_create_post);
// DELETE request to delete Costume.
router.delete('/resource/snakes/:id', snakes_controller.snakes_delete);
// PUT request to update Costume.
router.put('/resource/snakes/:id', snakes_controller.snakes_update_put);
// GET request for one Costume.
router.get('/resource/snakes/:id', snakes_controller.snakes_detail);
// GET request for list of all Costume items.
router.get('/resource/snakes', snakes_controller.snakes_list);
/* GET detail costume page */
router.get('/detail', snakes_controller.snakes_view_one_Page);
/* GET create costume page */
router.get('/create', snakes_controller.snakes_create_Page);
/* GET create update page */
router.get('/update', snakes_controller.snakes_update_Page);
/* GET create costume page */
router.get('/delete', snakes_controller.snakes_delete_Page);




module.exports = router;