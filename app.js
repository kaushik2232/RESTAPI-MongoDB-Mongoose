const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./API/Routes/products')
const orderRoutes = require('./API/Routes/order')
app.use(morgan('dev'));
app.use('/products', productRoutes);  
app.use('/order', orderRoutes); 
app.use((req, res, next) => {
    const error =  new Error('Not Found');
    error.status(404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;