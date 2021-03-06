
const express = require('express')
const app = express()
const server = require('http').Server(app); // server to be used by socket.io

app.get('/', function (req, res) {
  console.log("request")
  const msg = 'Wewe ni mnoma!!!\n'
  res.end(msg);
})

server.listen('80', '0.0.0.0', () => {
  console.log(`Server running.`);
});

// const server = https.createServer(
//   // {
//   //   key: fs.readFileSync('server.key'),
//   //   cert: fs.readFileSync('server.cert')
//   // },
//   (req, res) => {
//     const xfp = req.headers["X-Forwarded-Proto"] || req.headers["x-forwarded-proto"];
//     //console.log({"req":req});
//     if (!req.connection.encrypted) {
//       res.writeHead(301, `https://${req.headers.host}${req.url}`);
//       console.log("redirecting")
//       const msg = 'Wewe, ni mnomare!!!\n'
//       res.end(msg);
//     } else {
//         console.log("request detected.")
//         res.statusCode = 200;
//         const msg = 'Wewe, ni mnoma!!!\n'
//         res.end(msg);
//       }
// });

// server.listen('80', '0.0.0.0', () => {
//   console.log(`Server running.`);
// });

/**
 * In the context of servers, 0.0. 0.0 means all IPv4 addresses on 
 * the local machine. If a host has two IP addresses, 192.168. ... 
 * In the context of routing, 0.0. 0.0 usually means the default route, 
 * i.e. the route which leads to 'the rest of' the Internet instead of 
 * somewhere on the local network.
 */