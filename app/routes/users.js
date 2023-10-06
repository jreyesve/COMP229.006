var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
  res.render('home', { title: 'Profile' });
});

router.get('/profile/julio', function(req, res, next) {
  res.render('home', { title: 'Profile: Julio' });
});

router.get('/profile/jhon', function(req, res, next) {
  res.render('home', { title: 'Profile: John' });
});
module.exports = router;
