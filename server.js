var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var patients = require('./routes/patientRoutes');
var detailed = require('./routes/detailsRoutes');
var drugs = require('./routes/drugRoutes');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patients);
app.use('/details', detailed);
app.use('/drug', drugs);

app.listen(port, function() {
console.log("listening on port: ", port);
})
