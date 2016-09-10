/*****************************************
 *                                       *
 *  Ada Simple Server Powered by NodeJS  *
 *                                       *
*****************************************/

const http = require('http');
const fs = require('fs');
const port = 5555;

const server = (req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello, AdaCode Last Course Online ADA-ADA-ADA');
};

http.createServer(server).listen(port);

console.log(`${new Date()} - Ada Server is running at localhost:${port}`);
