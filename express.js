const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, './contact.html'))
})

app.all('*', (req, res) => {
    res.status(404).send(path.resolve(__dirname, './404.html'))
})

app.listen(5000, () => {
    console.log('server is running')
})