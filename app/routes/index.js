var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home' , { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('home', { title: 'About' });
});

router.get('/products', function(req, res, next) {
  res.render('products', 
  { 
    product: 'Products',
    title: 'Phone'
  });
});

module.exports = router;
