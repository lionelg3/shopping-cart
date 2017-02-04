var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://lh3.googleusercontent.com/-gqqyGnP_6eg/AAAAAAAAAAI/AAAAAAAAACI/-obQim1xyVM/photo.jpg',
        title: 'Back To The Futur',
        description: 'The original movie!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.bowtiecinemas.com/wp-content/uploads/2014/04/016689h1.jpg',
        title: 'E.T. Movie',
        description: 'Great Movie!!!!',
        price: 10
    })
];

var done = 0;
for (var i=0; i<products.length; i++) {
    products[i].save(function (err, res) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

var exit = function () {
    mongoose.disconnect();
};