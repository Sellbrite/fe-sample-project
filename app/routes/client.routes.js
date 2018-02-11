'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')
const contentPath = path.join(__dirname, '../../content')

// front end routes ======================================================================

// route to handle all angular client state URL requests (regex match URL with no fiel extention, query OK)
router.get(/^\/([^\.\?]*|[^\?]*\/[^\.\?]*)(\?.*)?$/, (req, res, next) => {
    let file = 'index.html'

    res.sendFile(file, {
        root: contentPath
    })
})

router.get('*', express.static(contentPath, {
    fallthrough: false
}))

// handle tatic file 404
router.use(function (err, req, res, next) {
    if (err) console.error
    res.sendFile(404)
})

module.exports = router