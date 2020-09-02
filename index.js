const https = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = https.createServer(
  // {
  //   key: fs.readFileSync('server.key'),
  //   cert: fs.readFileSync('server.cert')
  // },
  (req, res) => {
  console.log("request detected.")
  res.statusCode = 200;
  const msg = 'Wewe ni mnoma!!!\n'
  res.end(msg);
});
function forceHttps(req, res, next) {
  const xfp =
    req.headers["X-Forwarded-Proto"] || req.headers["x-forwarded-proto"];
  if (xfp === "http") {
    res.redirect(301, `https://${hostname}${req.url}`);
  } else {
    next();
  }
}

server.use(forceHttps);

server.listen('80', '0.0.0.0', () => {
  console.log(`Server running.`);
});

/**
 * In the context of servers, 0.0. 0.0 means all IPv4 addresses on 
 * the local machine. If a host has two IP addresses, 192.168. ... 
 * In the context of routing, 0.0. 0.0 usually means the default route, 
 * i.e. the route which leads to 'the rest of' the Internet instead of 
 * somewhere on the local network.
 */