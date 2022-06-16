const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const portNumber = 3001

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
    console.log('message: ' + msg)
  })

  // socket.on('disconnect', () => {
  //   console.log(`user ${clientCount} disconnected`)
  // })
})

server.listen(portNumber, () => {
  console.log(`server is running at http://localhost:${portNumber}/`)
})
