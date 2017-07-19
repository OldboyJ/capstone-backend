var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/', (req,res) => {
  knex('drug')
    .select()
    .then(drug => res.send(drug))
})

// router.post('/approval', (req,res) => {
//   knex('')
// })

module.exports = router;
