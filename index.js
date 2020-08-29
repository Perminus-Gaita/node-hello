const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!!!\n'
  res.end(msg);
});

server.listen('80', '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}/`);
});

/**
 * In the context of servers, 0.0. 0.0 means all IPv4 addresses on 
 * the local machine. If a host has two IP addresses, 192.168. ... 
 * In the context of routing, 0.0. 0.0 usually means the default route, 
 * i.e. the route which leads to 'the rest of' the Internet instead of 
 * somewhere on the local network.
 */