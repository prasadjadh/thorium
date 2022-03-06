const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://prasad1137:5IQmYIBLEHIAI7xz@cluster0.jra3o.mongodb.net/prasad1137",
	{ useNewUrlParser: true })
	.then(() => console.log('mongodb is connected'))
	.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});