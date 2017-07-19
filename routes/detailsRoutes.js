var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/*** Get a detailed single view ***/
// router.get('/:id',(req, res) => {
//   console.log(req.params.id)
//   knex('patient').join('plans','patient.PRIMARYPLANID','=','plans.PLANID').join('drug','drug.PAYERID','=','plans.PAYERID').join('patients_drugs','patients_drugs.DRUGID','=','drug.DRUGID').select('patient.PATIENTID','patient.FIRSTNAME','patient.LASTNAME','patient.REFERRALSRC','patient.PRIMPLAN','patient.DEDMEFORYEAR','patient.OOPMAXTODATE','patient.OOPMET','drug.DRUGNAME','drug.DRUGTYPE','patients_drugs.DURATION','drug.TIER','drug.HCCOST','drug.COSTPERDOSE','patients_drugs.APPROVED').where('patient.PATIENTID',req.params.id)
//       .then(patient => {
//         console.log('data',patient)
//         res.send(patient);
//       })
// });

router.get('/:id', (req,res) => {
  knex('patients_drugs').join('patient', 'patient.PATIENTID', '=', 'patients_drugs.PATIENTID').join('drug','drug.DRUGID','=','patients_drugs.DRUGID').where('patientdrugid', req.params.id)
      .then(patient_drug => {
        res.send(patient_drug);
      })
})

module.exports = router;
