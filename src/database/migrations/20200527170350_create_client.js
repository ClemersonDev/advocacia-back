
exports.up = function(knex) {
  return knex.schema.createTable('clients', function (table) {
    table.string('id').primary()
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('phone').notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
