const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
  },
  {collection:'data'}
);

module.exports = mongoose.model('data', dataSchema);
