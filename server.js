const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://www.instagram.com/25os3/"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Rpc is ready.")
  })
}
module.exports = keepAlive
