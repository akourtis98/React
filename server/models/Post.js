const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    comments: {
        type: Array
    },
    author_id: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('posts', PostSchema);

module.exports = Post;