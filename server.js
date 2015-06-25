var express = require('express'),
    bookApp = require('node-restful')
    mongoose = bookApp.mongoose
    
var app = express();
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    


mongoose.connect('mongodb://localStorage/bookApp');

var BookSchema = mongoose.Schema({
    name: String,
    sku: String,
    Price: Number
});

var Books = restful.model('books', BookSchema);
Books.methods(['get', 'put', 'post', 'delete']);
Product.register(app, '/api/books');

app.listen(3000);
console.log('Server is running at Port 3000');