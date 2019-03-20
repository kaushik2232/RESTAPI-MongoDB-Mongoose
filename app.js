const express = require('express');
const app = express();

const productRoutes = require('./API/Routes/products')
const orderRoutes = require('./API/Routes/order')
app.use('/products', productRoutes);  
app.use('/order', orderRoutes); 
module.exports = app;