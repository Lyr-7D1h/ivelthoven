var express = require('express');
var router = express.Router();

const version = 2.0;
const pub_date = new Date();
const edit_date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let jobs = ["Star Wars Fanboy", "Wanabe Hacker", "Night Animal", "Dead Inside"];
  let rand = () => {return Math.round(Math.random()*(jobs.length - 1))}
  let job_min = jobs[rand()];
  let job_max = jobs[rand()];

  while(job_min == job_max) {
    job_min = jobs[rand()];
    job_max = jobs[rand()];
  }

  console.log(job_min, job_max);
  res.render('index', { title: 'IVelthoven', job_min: job_min, job_max: job_max, version: version });

});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', version: version, pub_date: pub_date,edit_date: edit_date});
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', version: version });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', version: version });
});
module.exports = router;
