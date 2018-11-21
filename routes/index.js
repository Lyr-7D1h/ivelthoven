const express = require('express');
const router = express.Router();
const fs = require('fs');


const version = 1.1;
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

router.post('/contact', function(req,res,next) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let subject = req.body.subject;
  let boxes = [firstname, lastname, subject];
  for (k in boxes) {
    if (boxes[k].length > 900) {
      res.render("contact", {title: "Too big!"});
      return
    }
  }
  let date = new Date();
  let contact_form = `DATE: ${date}\nFIRSTNAME: ${firstname} \nLASTNAME: ${lastname}\nSUBJECT: ${subject}\n\n`
  
  let database_path = './database/contact'
  
  let database_size = fs.statSync(database_path).size;

  console.log(database_size);
  if (database_size < 60000) {
    fs.appendFile(database_path, contact_form, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("CONTACT FORM SAVED");
      res.render("contact", {title: "Form Send!"});
    })
  } else {
    res.render("contact", {title: "Database full!"});
  }
})
module.exports = router;
