exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients_drugs', function(table) {
    table.string('PATIENTID');
    table.increments('patientdrugid').primary();
    table.integer('DRUGID');
    table.integer('DURATION');
    table.integer('APPROVED').default(0);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients_drugs');
};
