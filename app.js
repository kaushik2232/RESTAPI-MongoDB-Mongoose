const express = require('express');
const app = require('./app');
app.use((req, res, next) => {
    res.status(200).json({
        message:"Its Works!"
    })
});  

module.exports = app;