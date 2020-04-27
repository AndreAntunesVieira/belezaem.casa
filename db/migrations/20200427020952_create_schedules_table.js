const { createDefaultTable } = require('../migration-helpers/knexHelpers')

exports.up = createDefaultTable('schedules', t => {
  t.string('title').notNull()
  t.string('text').notNull()
  t.relation('user_id')
  t.dateTime('date').notNull()
})

exports.down = knex => knex.schema.dropTable('schedules')
