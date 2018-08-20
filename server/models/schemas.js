const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, minlength:[2, "Name must be atleast 3 chars"],required: [true, "Name field must be at least 3 characters"]},
   }, {timestamps: true})
mongoose.model('Author', AuthorSchema);// We are setting this Schema in our Models as 'Author'