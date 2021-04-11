import * as dotenv from 'dotenv'

dotenv.config()

export default {
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: false,
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/models/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  },
  seeds: ['./src/database/seeds/*.ts'],
  factories: ['./src/database/factories/*.ts']
};
