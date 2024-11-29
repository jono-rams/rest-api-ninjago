const express = require('express');

// set up express app
const app = express();

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});