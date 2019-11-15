const express = require('express');
const mongo = require('mongodb').MongoClient;
const db = require('./mern/config/config');
const bodyParser = require('body-parser');
const cors=require('cors');
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongo.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) =>
 {
   if (err)
        return console.log(err);
        const database = db.db('quiz');
        require('./mern/app/routes')(app, database);
        app.listen(port, () => {
        console.log('connected to db');
   });
});
