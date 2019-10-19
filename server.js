const express = require('express');
const mongo = require('mongodb').MongoClient;
const db = require('./mern/app/config/config');
const cors=require('cors')
const port = 8000;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors)
mongo.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
   if (err)
       return console.log(err);
   const database = db.db('quiz')
   require('./mern/app/routes')(app, database);
   app.listen(port, () => {
       console.log('connected to db');
   });
})