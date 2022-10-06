const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const autoIncrement = require('mongoose-auto-increment');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);

const database = mongoose.connection
autoIncrement.initialize(database)

database.on('error', err => console.error(err));
database.once('connected', () => {
    console.log('Databse Connected')
})

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

const routes = require('./src/routes/index');
app.use('/api', routes)

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//mongodb://localhost:27017