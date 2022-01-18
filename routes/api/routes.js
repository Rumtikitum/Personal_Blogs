const router = require('express').Router();
const {
    getAllBlogs,
    getBlogId,
    createBlog,
    updateBlog,
    deleteBlog,

} = require('../../controllers/blog-controller.js')

router.route('/')
    .get(getAllBlogs)
    .post(createBlog)

router.route('/:id')
    .put(updateBlog)
    .get(getBlogId)
    .delete(deleteBlog)

module.exports = router;