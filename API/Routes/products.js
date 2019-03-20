const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
      message:'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        madeof: req.body.madeof,
        type: req.body.type
    };
    res.status(201).json({
        message:'Handling POST requets to /products',
        postedProduct: product
    });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:'You discovered the special ID',
            id: id
        });
    }   else{
            res.status(200).json({
                message: 'You passed an ID'
            });
        }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'deleted product!'
    });
});
module.exports = router;