const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
    index: (req, res)=>{
        console.log("Made it to index method in controller")
        Author.find({}, (err, authors)=>{
            if(err){
                console.log(err);
                res.status(400).json(err.errors)
            }else{
                console.log(authors);
                res.json(authors);
            }
        })
    },
    create: (req, res)=>{
        console.log("Made it to create method in controller"); 
        var author = new Author({
            name: req.body.name
        });     
        author.save((err, author)=>{
            if (err) {
                console.log("Somthing went wrong", err.message);
                res.status(400).json(err.erros);
            }else{
                console.log("Successfull added author!");
                res.json(author);
            }
        });
    },
    show: (req, res)=>{
        console.log("Mode it to the show method in controller, the id is: ", req.params.id);
        Author.findOne({_id:req.params.id}, (err, author)=>{
            if (err){
                console.log(err);
                res.status(400).json(err.erros);
            }else{
                console.log(author);
                res.json(author);
            }
        })

    },
    update: (req, res)=>{
        console.log("Made it to update method in controller, the id is: ", req.params.id);
        Author.update({_id:req.params.id},{
            name: req.body.name
        }, (err, authors)=>{
            if(err){
                console.log("There was an error ", err);
                res.status(400).json(err.errors);
            }else{
                console.log("Successfully edited author!")
                res.json(authors);
            }
        });
    },
    destroy: (req, res)=>{
        console.log("Madie in to the detroy method in controller, the id is: ", req.params.id);
        Author.remove({_id: req.params.id}, (err, author)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Successfully removed author!");
                res.json(author)
            }
        });
    }
}