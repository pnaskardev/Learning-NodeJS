const http = require('http'); 
const { parse } = require('path');


const routes=require('./routes')

// Creating a server 
// and calling a particular function to call whenever we 
// get a request of creating a server
const server=http.createServer(routes);

// starts a process to listen for incoming requests
// 3000 is the port number
// in production we don't have to mention the port number

server.listen(3000);