const path = require('path')
const dotenv = require('dotenv')
const parsePgUrl = require('pg-connection-string').parse

dotenv.config({ path: path.join(__dirname, '.env') })

const defaultConfig = {
  client: 'postgresql',
  connection: {
    ssl: true,
    ...parsePgUrl(process.env.DATABASE_URL),
  },
  searchPath: ['public'],
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
