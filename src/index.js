const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const {mongoose}  = require('./database');

//settings
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/people', require('./routes/people.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//inicio servidor
app.listen(app.get('port'), () => {
    console.log(`server en puerto ${app.get('port')}`);
});