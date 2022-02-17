const db = require('../models/index')
const Book = db.book

// 1. create book
const addBook = async (req, res) => {
    let book = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    try {
        book = await Book.create(book)
        console.log('book added')
        res.status(200).send(book)
    }
    catch (err) {
        console.log('failed to add the book')
        res.status(404).send(err.errors[0].message)
    }
}

// 2. get all books
const getAllBooks = async (req, res) => {
    let books = await Book.findAll({})
    if (books) {
        res.status(200).send(books)
        return
    }
    res.status(404).send('No books available')
}

// 3. get a single book using id
const getBookById = async (req, res) => {

    let book = await Book.findOne({ where: { id: req.params.id } })
    if (book) {
        res.status(200).send(book)
    }
    res.status(404).send({ error: "book with given id is not found" })
}

// 4. updating a book
const updatedBook = async (req, res) => {
    let book = await Book.findOne({ where: { id: req.params.id } })
    if (book) {
        book = {}
        for (const key in req.body) {
            if (key === 'id') {
                continue
            }
            if (req.body[key]) {
                book[key] = req.body[key]
            }
        }
        await Book.update(book, { where: { id: req.params.id } })
        book = await Book.findOne({ where: { id: req.params.id } })
        res.status(200).send(book)
        return
    }
    res.status(404).send({ error: "book with given id is not found" })
}

// 5. deleting a book
const deleteBook = async (req, res) => {
    let book = await Book.findOne({ where: { id: req.params.id } })
    if (book) {
        await Book.destroy({ where: { id: req.params.id } })
        res.status(200).send('book deleted ')
        return
    }
    res.status(404).send({ error: "book with given id is not found" })
}

module.exports = { addBook, getAllBooks, getBookById, updatedBook, deleteBook }