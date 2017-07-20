var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET list of all patients. */
router.get('/', function(req, res) {
  knex('patients_drugs').select('patient.PATIENTID','patient.FIRSTNAME','patient.LASTNAME','patients_drugs.APPROVED','patients_drugs.patientdrugid').join('patient', 'patient.PATIENTID', '=', 'patients_drugs.PATIENTID').orderBy('patients_drugs.APPROVED','ASC').then((details) => {
    res.send(details)
  });
});

router.get('/all', function(req, res) {
  knex('patient').select().then(function(patients) {
    res.send(patients)
  });
});

router.get('/:id/delete', (req, res) => {
  knex('patients_drugs').del().where('patientdrugid', req.params.id)
      .then(() => {
        console.log('deleted');
        res.redirect('/patients');
      })
})

router.post('/', function(req, res) {
   knex('patient').insert(req.body).then(() => {
     res.redirect('/patients');
   })
});


module.exports = router;
