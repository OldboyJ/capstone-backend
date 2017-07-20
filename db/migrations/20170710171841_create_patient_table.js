

exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', function(table) {
    table.string('PATIENTID');
    table.string('FIRSTNAME');
    table.string('LASTNAME');
    table.string('REFERRALSRC');
    table.string('PRIMPLAN');
    table.integer('DEDMET').defaultsTo(-1);
    table.integer('DEDMEFORYEAR').defaultsTo(-1);
    table.integer('OOPMAXTODATE').defaultsTo(500);
    table.integer('OOPMET').defaultsTo(-1);
    table.integer('PRIMARYPLANID');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient');
};
