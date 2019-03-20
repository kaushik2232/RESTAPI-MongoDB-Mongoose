const mongoose = require('mongoose');

const dbschema = mongoose.Schema({
    _batchno: mongoose.Schema.Types.ObjectId,
    madeof: String,
    type: String
});

module.exports = mongoose.model('Product', dbschema);