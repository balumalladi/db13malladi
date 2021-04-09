var express = require('express');
const snakes_controlers= require('../controllers/snakes');
var router = express.Router();
/* GET costumes */
router.get('/', snakes_controlers.snakes_view_all_Page );
module.exports = router;
