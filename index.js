const http = require('http')
const path = require('path')
const fs = require('fs')

//accessing PORT environment values in case 8080 is unavailable
const PORT = process.env.PORT || 8080

const server = http.createServer((req,res) => {
    
    //choosing which file will be displayed based on url
    let filePath = path.join(
                     __dirname,
                     'public',
                     req.url === '/' ? 'index.html' : `${req.url}.html`)
    console.log(filePath)

    
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))