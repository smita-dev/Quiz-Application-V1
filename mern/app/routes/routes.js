module.exports = (app, db) => {
        //route to get question data from databse
        app.get("/", (req, res) => {        
            db.collection("test").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).send(result);
                console.log(result);
            });

        });
 };