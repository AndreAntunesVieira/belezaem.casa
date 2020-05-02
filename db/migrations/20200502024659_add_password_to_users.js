const { editTable } = require('../migration-helpers/knexHelpers')

exports.up = editTable('users', t => {
  t.string('password').nullable()
  t.string('token').nullable()
  t.boolean('visible').notNull().defaultTo(true)
})

exports.down = editTable('users', t => {
  t.dropColumn('password')
  t.dropColumn('token')
  t.dropColumn('visible')
})
