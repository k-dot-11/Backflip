var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('API is kinda working properly');
});

router.post('/messages', function(req, res, next) {
	res.send(req.body.post);
});

module.exports = router;
