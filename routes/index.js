var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('views/welcome.html', {root: '.'})
});

router.get('/playground', function(req, res, next) {
  res.sendFile('views/index.html', {root: '.'})
});

router.get('/tutorial', function(req, res, next) {
  res.sendFile('views/tutorial.html', {root: '.'})
});

router.get('/result', function(req, res, next) {
  res.sendFile('views/result.html', {root: '.'})
});

module.exports = router;
