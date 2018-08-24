const { Pool } = require('pg')

const pool = new Pool({
  user: 'sam',
  host: 'localhost',
  database: 'sdc',
  password: null,
  port: 5432,
});

pool.connect();

module.exports = {
  pool: pool
};

