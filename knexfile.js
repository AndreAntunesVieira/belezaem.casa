const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, '.env') })

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const defaultConfig = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL + '?ssl=true',
  searchPath: ['knex', 'public'],
  migrations: {
    directory: 'db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
}

module.exports = {
  development: defaultConfig,
  production: defaultConfig,
}
