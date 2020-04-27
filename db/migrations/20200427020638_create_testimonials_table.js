const { createDefaultTable } = require('../migration-helpers/knexHelpers')

exports.up = createDefaultTable('testimonials', t => {
  t.string('name').notNull()
  t.string('text').notNull()
  t.integer('position').nullable()
})

exports.down = knex => knex.schema.dropTable('testimonials')
