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
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
  },
  {collection:'data'}
);

const sentenceSchema =  mongoose.model('thesisData', dataSchema);

module.exports = sentenceSchema;