const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    content: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

const Blogs = model('Blog', blogSchema);

module.exports = Blogs;