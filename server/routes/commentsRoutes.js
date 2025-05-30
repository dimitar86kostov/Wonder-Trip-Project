const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Добавяме reply към даден коментар
router.post('/:commentId/replies', async (req, res) => {
    const { commentId } = req.params;
    const { text, author } = req.body;

    try {
        // Намираме коментара по ID
        const comment = await Comment.findById(commentId);

        // Добавяме новия reply към масива
        const newReply = {
            _id: new mongoose.Types.ObjectId(), // Генерираме уникално ID
            text,
            author
        };

        comment.replies.push(newReply);

        // Записваме промените в базата
        await comment.save();

        res.status(201).json(newReply); // Връщаме новия reply
    } catch (err) {
        res.status(500).json({ error: 'Failed to add reply' });
    }
});

// Редактираме reply по ID
router.put('/:commentId/replies/:replyId', async (req, res) => {
    const { commentId, replyId } = req.params;
    const { text } = req.body;

    try {
        // Намираме коментара
        const comment = await Comment.findById(commentId);

        // Намираме и редактираме конкретния reply
        const reply = comment.replies.id(replyId);
        if (!reply) return res.status(404).json({ error: 'Reply not found' });

        reply.text = text;

        await comment.save();

        res.status(200).json(reply);
    } catch (err) {
        res.status(500).json({ error: 'Failed to edit reply' });
    }
});

// Изтриваме reply по ID
router.delete('/:commentId/replies/:replyId', async (req, res) => {
    const { commentId, replyId } = req.params;

    try {
        const comment = await Comment.findById(commentId);

        // Премахваме конкретния reply
        comment.replies = comment.replies.filter(r => r._id.toString() !== replyId);

        await comment.save();

        res.status(200).json({ message: 'Reply deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete reply' });
    }
});
