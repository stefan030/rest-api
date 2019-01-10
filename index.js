const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Parse whats in the body of the request and give access to body (bodyParser is a middleware in this case - happens between requests)
app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for requests');
});