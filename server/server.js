const express = require('express');
const bodyParser = require('body-parser');
const db_config = require('./app/db_config');
const app = express();
const cors = require('cors')

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: db_config.database.user,
  host: db_config.database.host,
  database: db_config.database.db,
  password: db_config.database.password,
  port: db_config.database.port,
})

pool.on('error',(err, client) =>{
  console.error('Error,cliente inativo.',err)
  process.exit(-1)
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./app/routes')(app,pool);

app.listen(db_config.server.port, ()=> {
  console.log('Escutando porta '+ db_config.server.port);
})
