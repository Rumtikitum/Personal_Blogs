const router = require('express').Router();
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,

} = require('../../controllers/blog-controllers')

router.route('/')
    .get(getAllBlogs)
    .post(createBlog)

router.route('/:id')
    .put(updateBlog)
    .get(getBlogById)
    .delete(deleteBlog)

module.exports = router;