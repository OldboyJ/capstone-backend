var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/:id', (req,res) => {
  knex('patients_drugs').join('patient', 'patient.PATIENTID', '=', 'patients_drugs.PATIENTID').join('drug','drug.DRUGID','=','patients_drugs.DRUGID').where('patientdrugid', req.params.id)
      .then(patient_drug => {
        res.send(patient_drug);
      })
})

router.post('/approval', (req,res) => {
  knex('patients_drugs')
    .insert(req.body)
    .then(() => {
      knex('patients_drugs').select().then((appv) => res.send(appv))
    })
})

module.exports = router;
