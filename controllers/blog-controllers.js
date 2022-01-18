const { Blogs } = require('../models');

const blogController = {

    // GET /api/users
    getAllBlogs(req, res) {
        Blogs.find({})
        .select('-__v')
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    getBlogById({params}, res) {
        Blogs.find({ _id: params.id })
        .select('-__v')
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({message: 'No Blog found with this id'});
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    updateBlog({ params, body }, res) {
        Blogs.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true }
        )
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({ message: 'No Blog found with this id' });
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => res.status(400).json(err));
    },



        // POST /api/users
    createBlog({ body }, res) {
        Blogs.create(body)
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => res.status(400).json(err));
    },

    deleteBlog({ params }, res) {
        Blogs.findOneAndDelete({ _id: params.id })
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
        })
        .then(()=>res.json('Blog deleted'))
        .catch(err => res.status(400).json(err));
    },

}

module.exports = blogController;