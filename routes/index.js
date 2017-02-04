var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Shopping Cart',
        text: 'This is my text',
    } );
});

module.exports = router;
