/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.integer.increments("id_tasks");
    table.string("tasks", 255).notNullable();
    table.timestamp("entry_date").defaultTo(knex.fn.now());
    table.dateTime("deadline").notNullable();
    table.integer("id_status").unsigned.notNullable();

    table.foreign("id_status").references("id_status").inTable("status");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
