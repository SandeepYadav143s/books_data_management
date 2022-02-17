const validate = (req, res, next) => {
    if (req.body.title && req.body.price) {
        next()
        return
    }
    res.status(406).send('title field or body field cannot be empty')
}
module.exports = validate