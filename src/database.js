const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/swapi', function(error){
    if(error) console.log(error);

        console.log("conectado a mongodb");
});

module.exports = mongoose;
