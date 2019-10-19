module.exports = (app, db) => {
    app.post("/", (req, res) => {
        console.log('/')
        console.log(req.body);
        console.log(req.body.email);
        const note= req.body
        // var bodyJson = JSON.parse(body)
        // console.log(note)
        // const note={email:"abc@gmail.com"}

        // db.collection('answer').insert(note, (err, result) => {
        //     if (err)
        //         console.log(err + " this error has occured");
        //     else
        //         console.log(result);
        // });
        db.collection("answer").insertOne(note, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });
       
    });

    app.get("/", (req, res) => {
        //console.log('/routes')
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

    
        db.collection('test').find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).send(result);
        // console.log(result);
        });

    });
 };

