const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 8080

const server = http.createServer((req,res) => {
    
    let filePath = path.join(
                     __dirname,
                     'public',
                     req.url === '/' ? 'index.html' : `${req.url}.html`)
    console.log(filePath)
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))