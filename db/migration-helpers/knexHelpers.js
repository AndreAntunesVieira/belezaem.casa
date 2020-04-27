function knexHelpers(name, callback) {
  return knex => knex.schema.createTable(name, t => createDefaultTableSequence(knex, callback, t))
}
function editTable(name, callback) {
  return knex => knex.schema.table(name, t => editDefaultTableSequence(knex, callback, t))
}

function editDefaultTableSequence(knex, migrationOtherColumns, t) {
  Object.defineProperty(t, 'relation', { value: relationMiddleware(t) })
  migrationOtherColumns(t, knex)
}

function createDefaultTableSequence(knex, migrationOtherColumns, t) {
  Object.defineProperty(t, 'relation', { value: relationMiddleware(t) })
  addPrimaryColumn(t)
  migrationOtherColumns(t, knex)
  addTimestampColumns(knex, t)
}

function relationMiddleware(t) {
  return (name, options = {}) => {
    let { relatedTable = undefined, relatedField = 'id', nullable = false } = options
    if (!relatedTable) relatedTable = name.replace(/_id$/, 's')
    const method = nullable ? 'nullable' : 'notNull'
    t.integer(name)[method]()
    t.foreign(name)
      .references(relatedField)
      .inTable(relatedTable)
  }
}

function addPrimaryColumn(t) {
  t.increments('id')
    .unsigned()
    .primary()
}

function addTimestampColumns(knex, t) {
  t.dateTime('created_at')
    .notNull()
    .defaultTo(knex.fn.now())
  t.dateTime('updated_at')
    .nullable()
    .defaultTo(knex.fn.now())
  t.dateTime('deleted_at').nullable()
}

module.exports = {
  createDefaultTable: knexHelpers,
  editTable,
}
