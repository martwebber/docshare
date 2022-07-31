const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    owner: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String, required: true }
});

module.exports = mongoose.model('Document', documentSchema);