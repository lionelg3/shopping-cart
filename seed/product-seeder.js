var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.starwarsnewsnet.com/wp-content/uploads/2016/11/Rogue-One-1.png',
        title: 'Rogue One',
        description: '2016 ‧ Science fiction film/Action',
        price: 35
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/1b/98/9c/1b989c7a9f3a45d6cd6f6ecea92091a1.jpg',
        title: 'Quand Harry rencontre Sally',
        description: '1989 ‧ Drame/Drame ‧ 1h 36m',
        price: 9
    }),
    new Product({
        imagePath: 'http://fr.web.img2.acsta.net/medias/03/86/14/038614_af.jpg',
        title: 'Vous avez un message',
        description: '1998 ‧ Drame/Film d\'amour ‧ 1h 59m',
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