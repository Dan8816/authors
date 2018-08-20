var mongoose = require('mongoose');
var Author = mongoose.model('Author') // We are retrieving this Schema from our Models, named 'Author'
const main = require("./../controllers/main");
var path = require('path')

module.exports = (app)=>{
    app.get("/main", main.index),//index route
    app.post("/main", main.create),//post body info to create element in Db
    app.get("/main/:id", main.show),//get one element by id from Db
    app.patch("/main/:id", main.update),//update an element by id with body info
    app.delete('/main/:id', main.destroy),//delete an element by id from Db
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}