const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'slava',
    password: 'ytxtcnm91',
    host: 'localhost',
    port: 5432,
    database: "node"
});

module.exports = pool;