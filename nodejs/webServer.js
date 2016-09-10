/*****************************************
 *                                       *
 *    Ada Web Server Powered by NodeJS   *
 *           (Response by url)           *
 *                                       *
*****************************************/

const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8099;

const server = (req, res) => {
  let pathname = url.parse(req.url).pathname;
  let extension = pathname.split(".")[1];
  console.log(`Requesting ${pathname}`);
  console.log(`Extension : ${extension}`);

  fs.readFile(pathname.substr(1), (err, data) => {
    if(err) {
      console.log(err);
      // FIX: Display 404 page not found
      res.writeHead(404, {'Content-type': 'text/html'});
    }
    else {
      console.log(`Server responsed`);
      res.writeHead(200, {'Content-type': `text/${extension}`});
      FIX: request " / " Response index.html
      res.write(String(data));
    }
    res.end();
  });
};

http.createServer(server).listen(port);
const serverRunning = () => {
  console.log(`Server still running`);
}

console.log(`${new Date()} - Ada Web Server is running at localhost:${port}`);
console.log(`Directory: ${__dirname}`);
console.log(`Filename: ${__filename}`);
setInterval(serverRunning,2000);
