var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home' , { title: 'Home',
                        welcome: 'Welcome',
                        mission: 'Mission' }); 
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me',
                        name: 'Julio Reyes',
                        });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects',
                          project1: 'Movie Poster Dashboard',
                          project2: 'Pizza Orders App',
                          project3: 'Web Site (Express.js)'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: 'Services',
                          service1: 'Web Development',
                          service2: 'Mobile App Development',
                          service3: 'Software Development',
                          service4: 'Testing and QA',
                          service5: 'UI/UX Design',
                          service6: 'Data Analytics',
                          service7: 'Cibersecurity',
                          service8: 'Cloud Services',
                          service9: 'Digital Transformation'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact me',
                        phone: '+(1) 437 288 7188',
                        email: 'julio_cesar.rv@hotmail.com',
                        linkedin: 'https://www.linkedin.com/in/julio-r-4a708599/'});
});

module.exports = router;
