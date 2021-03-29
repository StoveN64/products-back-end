// Require all packages that were just downloaded
require('dotenv').config()
const express = require('express');
const massive = require('massive');

// create basic server
const app = express();
// destructure SERVER PORT
const { SERVER_PORT } = process.env;
// use express json middleware
app.use(express.json());

// use massive, establish connection to connection string
const { SERVER_PORT, CONNECTION_STRING } = process.env;
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance);
      })
      .catch(err => console.log(err));



// Endpoints
app.get('/api/products', products_controller.getAll);
app.post('/api/products', products_controller.create);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });