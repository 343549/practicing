const http = require ('http');
const { json } = require('stream/consumers');
const server = http.createServer((req, res)=>{
    
    if (req.url === '/' ){
        
        res.write('Hello wold!')
        
    }

    else if (req.url === '/id'){
        res.write(JSON.stringify({
            id: ['this is the id']}))
        
    }
    else{
        res.write('not foundt')
    }
    res.end()
});

server.listen(3000);