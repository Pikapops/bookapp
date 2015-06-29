// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var bookSchema = new mongoose.Schema({
    book:{
	mainbookid           :String,
    anotherbookid        : String,        
    name: String,
    isbn: String,
    price: Number
}});

bookSchema.methods.updateBook = function(request, response){

	this.book.name = request.body.name;
	this.book.isbn = request.body.isbn;
	 this.book.save();
	response.redirect('/book');
};






// Return model
module.exports = restful.model('Books', bookSchema);

