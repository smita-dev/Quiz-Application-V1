
const express = require('express');
const mongo = require('mongodb').MongoClient;
const db = require('./mern/config/config');
const bodyParser = require('body-parser');
const cors=require('cors');
const bcrypt=require('bcryptjs')
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bcrypt)
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

// app.use(session({
//     cookie: { secure: true }
//   }))
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));

