const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./API/Routes/products')
const orderRoutes = require('./API/Routes/order')
mongoose.connect("mongodb+srv://mongodb:" + process.env.MONGO_ATLAS_PW + "@nodejs-react-mongodb-mongoose-zcs2p.mongodb.net/test?retryWrites=true", 
{
    useMongoClient: true
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/products', productRoutes);  
app.use('/order', orderRoutes); 
app.use((req, res, next) => {
    const error =  new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;