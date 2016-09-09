/*****************************************
 *                                       *
 *  Ada Simple Server Powered by NodeJS  *
 *                                       *
*****************************************/

const http = require('http');
const fs = require('fs');
const port = 8099

const server = (req, res) => {

  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello, AdaCode Last Course Online');
};

http.createServer(server).listen(port);

console.log(`${new Date()} - Ada Server is running at localhost:${port}`);
