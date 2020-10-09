const express = require('express'); // Backend Framework
const mongoose = require('mongoose'); // Object-relational mapping (ORM) to MongoDB
const bodyParser = require('body-parser'); // For requests ie: POST
const config = require('./config/keys.js');

const items = require('./routes/api/items.js');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Database
mongoose
    .connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log(`connected to database ${config.database}`))
    .catch(err => console.log(err));

// Use Routes
// Any requests going to api/items/... will go to the items variable (items.js)
app.use('/api/items', items)

// Run server
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
