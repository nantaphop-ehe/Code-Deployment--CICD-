const http = require("http");
// const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World from DevOps Lab!\nyo bro what's up");
});
// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });

const app = http.createServer(requestListener);
// We only listen if this file is run directly, not when imported by tests
if (require.main === module) {
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server running at port ${port}`);
});
}
module.exports = app; // Export for testing