const { createDefaultTable } = require('../migration-helpers/knexHelpers')

exports.up = createDefaultTable('costumers', t => {
  t.string('name').notNull()
  t.string('phone').nullable()
  t.date('birth_date').nullable()
})

exports.down = knex => knex.schema.dropTable('schedules')
