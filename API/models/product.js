const mongoose = require('mongoose');

const dbschema = mongoose.Schema({
    _batchno: mongoose.Schema.Types.prodId,
    madeof: String,
    type: String
});

module.exports = mongoose.model('Product', dbschema);