const { Blog } = require('../models');

const blogController = {

    // GET /api/users
    getAllBlog(req, res) {
        Blog.find({})
        .select('-__v')
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
        // POST /api/users
        createBlog({ body }, res) {
            Blog.create(body)
            .then(dbBlogData => res.json(dbBlogData))
            .catch(err => res.status(400).json(err));
        },

        deleteBlog({ params }, res) {
            Blog.findOneAndDelete({ _id: params.id })
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