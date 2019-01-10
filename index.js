const express = require('express');

// Set up express app
const app = express();

app.get('/api', (req, res) => {
   console.log('GET request');
   res.send({name: 'Yoshi'});
});

// Listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for requests');

});