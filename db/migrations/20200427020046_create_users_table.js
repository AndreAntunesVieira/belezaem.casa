const { createDefaultTable } = require('../migration-helpers/knexHelpers')

exports.up = createDefaultTable('users', t => {
  t.string('name').notNull()
  t.string('slug').notNull()
})

exports.down = knex => knex.schema.dropTable('users')
