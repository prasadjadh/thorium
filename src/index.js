const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment= require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(request.mw({attributeName:'myIp'}))


mongoose.connect("mongodb+srv://prasad1137:5IQmYIBLEHIAI7xz@cluster0.jra3o.mongodb.net/prasad1137", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

//let c= "122.152.18.3" 
//
// app.use(function(req,res,next){
// let ip = req.myIp
//   console.log(moment().format()+" "+ip+" "+req.originalUrl)
  
//     next()
// })

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
