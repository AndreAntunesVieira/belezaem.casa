const { editTable } = require('../migration-helpers/knexHelpers')

exports.up = editTable('schedules', t => {
  t.string('client').nullable()
})

exports.down = editTable('schedules', t => {
  t.dropColumn('client')
})
