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
    
    //Read and load files
    fs.readFile(filePath, (err, content) => {

        if(err) {
            //code for 404 error
            if(err.code == "ENOENT"){
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8')
                })
            } else {
                //any other server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            //code for success
            res.writeHead(200, { 'Content-Type' : 'text/html'})
            res.end(content, 'utf8')
        }
    })
    
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))