const { createDefaultTable } = require('../migration-helpers/knexHelpers')

exports.up = createDefaultTable('users_costumers', t => {
  t.relation('user_id')
  t.relation('costumer_id')
})

exports.down = knex => knex.schema.dropTable('schedules')
