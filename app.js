const express = require('express');
const app = express();

const productRoutes = require('./API/Routes/products')
app.use('/products', productRoues);  

module.exports = app;