module.exports = (app, db) => {
    
        //  app.post("/", (req, res) => {
        //     console.log(req.body.Username);
        //     console.log(req.body.Password);
        //     const note= req.body;
        //     db.collection("user").insertOne(note, function(err, res) {
        //         if (err) throw err;
        //         console.log("1 document inserted");
        //       });
        // });
        app.get("/", (req, res) => {
        
            db.collection("test").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result);
            console.log(result);
            });

        });
        // app.get("/login",(req,res)=>{
        //     db.collection("test").findOne{},(err,result)
        // })
 };