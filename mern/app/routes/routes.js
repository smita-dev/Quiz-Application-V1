module.exports = (app, db) => {
    // app.post("/", (req, res) => {
    //     //console.log('/')
    //     console.log(req);
    //     console.log(req.body.email);
    //     const note= req.body
    //     db.collection("answer").insertOne(note, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //       });
    //    // res.status(200).send('one do');
    // });
         app.post("/", (req, res) => {
            //console.log('/')
            console.log(req);
            console.log(req.body.reqUsername);
            console.log(req.body.reqPassword);
            const note= req.body
            db.collection("user").insertOne(note, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
              });
           // res.status(200).send('one do');
        });
    app.get("/", (req, res) => {
        // console.log('/routes')
        // db.collection('test').findOne({}, (err, result) => {
        //     if (err)
        //         console.log(err + " this error has occured");
        //     else {
        //         // res.send(result.questions.q1.options);
        //         res.status(200).send(result);
        //         // console.log(result);
        //         console.log(result.questions.q1.options)
        //     }
        // });

    
        db.collection("test").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).send(result);
        console.log(result);
        });

    });
 };