const express = require('express');
const routes = require('./routes/api');

// Set up express app
const app = express();

// Initialize routes
app.use('/api', routes);

// Listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for requests');
});