const express = require('express');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors=require('cors');
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const url="mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/test?retryWrites=true&w=majority";

//connecting to mongodb database
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) =>
 {
   if (err)
        return console.log(err);
        const database = db.db('quiz');
        require('./app/routes')(app, database);
        app.listen(port, () => {
        console.log('connected to db');
   });
});
