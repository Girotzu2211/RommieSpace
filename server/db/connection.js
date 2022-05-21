const { Pool, Client } = require('pg')
const client = new Client({
  user: 'jyitdzpdwapzpi',
  host:'ec2-35-168-194-15.compute-1.amazonaws.com',
  database: 'd43coe9qb77aoj',
  password: 'e6c332bd2288a74bcdd1b96dcd94033b503f6e75bee21797a069d547f1f97676',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});



module.exports = client