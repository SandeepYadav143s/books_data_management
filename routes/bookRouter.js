const bookController = require('../controllers/bookController.js')
const { books } = require('../models/index.js')
const router = require('express').Router()
const validate = require('../middlewares/validate')

router.post('/Book', validate, bookController.addBook)
router.get('/Books', bookController.getAllBooks)
router.get('/Books/:id', bookController.getBookById)
router.put('/Books/:id', bookController.updatedBook)
router.delete('/Books/:id', bookController.deleteBook)

module.exports = router
