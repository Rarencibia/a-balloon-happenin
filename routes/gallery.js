var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('gallery', { title: 'A Balloon Happenin Gallery'});
});

module.exports = router;
