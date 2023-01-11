import * as http from "http";

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Hello, World!");
  res.end();
});

server.listen(3000, () => console.log("Server listening on port 3000"));
