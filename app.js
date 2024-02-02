const http = require('http')
const fs = require('fs')
const path = require('path')
const { readFileSync } = fs

const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const contactPage = readFileSync('./contact.html')
const errorPage = readFileSync('./404.html')


const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    } else if (url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(contactPage)
        res.end()
    }else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(errorPage)
        res.end()
    }
})


server.listen('5000')