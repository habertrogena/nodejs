const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to home page');
    }

})

const port = 3000

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})