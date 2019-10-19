
module.exports = (app, db) => {
    app.post("/", (req, res) => {
        console.log('/')
        const note = { text: req.body.text, title: req.body.title };
        db.collection('answer').insert(note, (err, result) => {
            if (err)
                console.log(err + " this error has occured");
            else
                console.log(result);
        });
        res.status(200).send('Bon Jour');
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