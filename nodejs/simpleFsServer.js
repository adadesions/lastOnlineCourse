/*****************************************
 *                                       *
 *  Ada Simple Server Powered by NodeJS  *
 *           (Response by fs)            *
 *                                       *
*****************************************/

const http = require('http');
const fs = require('fs');
const port = 8099

const server = (req, res) => {
  let data = fs.readFileSync('map.txt');

  res.writeHead(200, {'Content-type': 'text/plain'});
  res.write('***********************START*********************\n\n');
  res.write(String(data));
  res.write('\n');
  res.end('***********************END*************************');
};

http.createServer(server).listen(port);

console.log(`${new Date()} - Ada Server is running at localhost:${port}`);
