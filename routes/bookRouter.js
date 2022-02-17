const bookController = require('../controllers/bookController.js')
const { books } = require('../models/index.js')
const router = require('express').Router()
const validate = require('../middlewares/validate')

router.post('/addBook', validate, bookController.addBook)
router.get('/getBooks', bookController.getAllBooks)
router.get('/getBooks/:id', bookController.getBookById)
router.put('/updateBook/:id', bookController.updatedBook)
router.delete('/deleteBook/:id', bookController.deleteBook)

module.exports = router