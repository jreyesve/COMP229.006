var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home' , { title: 'Home' }); 
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: 'Services'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact me',
                        phone: '+(1) 437 288 7188',
                        email: 'julio_cesar.rv@hotmail.com',
                        linkedin: 'https://www.linkedin.com/in/julio-r-4a708599/'});
});

module.exports = router;
