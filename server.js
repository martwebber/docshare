const http = require('http');
const app = require('./app');

const PORT = process.env.PORT

const server = http.createServer(app);

server.listen(PORT, () =>
console.log(`-------Your server is running on port ${PORT} ------------`)
);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);
