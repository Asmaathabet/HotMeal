const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = '';

switch (process.env.NODE_ENV) {
  case 'testing':
    dbUrl = process.env.TESTING_DB;
    break;
  case 'production':
    dbUrl = process.env.DATABASE_URL;
    break;
  case 'development':
    dbUrl = process.env.DEVELOPMENT_DB;
    break;
  default:
    throw new Error('No Database URL!!!');
}

const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
