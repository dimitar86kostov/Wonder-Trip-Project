const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: {
        _id: String,
        email: String,
    },
}, { _id: true }); // Позволяваме `_id` автоматично за всеки reply

const commentSchema = new mongoose.Schema({
    tripId: { type: String, required: true },
    text: { type: String, required: true },
    author: {
        _id: String,
        email: String,
    },
    replies: [replySchema], // Добавяме replies като поддокументи
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
