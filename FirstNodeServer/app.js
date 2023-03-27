const http = require('http');

const express=require('express');

const expressApp=express();

const server = http.createServer(expressApp);

server.listen(3000);
