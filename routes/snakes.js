var express = require('express');
const snakes_controlers= require('../controllers/snakes');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET snakess */
router.get('/', snakes_controlers.snakes_view_all_Page );
/* GET update snakes page */
router.get('/update', secured, snakes_controlers.snakes_update_Page);
router.get('/create', secured, snakes_controlers.snakes_create_Page);
router.get('/delete', secured, snakes_controlers.snakes_delete_Page);
module.exports = router;
