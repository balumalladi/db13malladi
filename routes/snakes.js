var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
     res.render('snakes', { title: 'Search Results for snakes' });
});
 
module.exports = router;