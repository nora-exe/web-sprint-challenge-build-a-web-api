// START SERVER HERE
const server = require('./api/server')
const port = 5000

// watch for connections on port 5000
server.listen(port, () =>
  console.log('Listening on', port)
)