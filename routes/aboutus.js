var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('aboutus', { title: 'About A Balloon Happenin'});
});

module.exports = router;
