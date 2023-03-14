const http = require('http'); 
const fs = require('fs'); 
function rqListener(req,res)
{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST')
    {
        fs.writeFileSync('message.txt','DUMMY');
        // allows us to write metadata in one go 
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
}

// Creating a server 
// and calling a particular function to call whenever we 
// get a request of creating a server
const server=http.createServer(rqListener);

// starts a process to listen for incoming requests
// 3000 is the port number
// in production we don't have to mention the port number

server.listen(3000);