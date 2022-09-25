/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable("comments", function (table) {
        table.integer.increments("id_comments");
        table.string("comments", 255).notNullable();
        table.integer("id_tasks").unsigned.notNullable();
        table.foreign("id_tasks").references("id_tasks").inTable("tasks");
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("comments");
};
