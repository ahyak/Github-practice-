const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res){
  var message= "I don't know what I'm doing"
  res.send(message)
})

app.listener(3000, function(){
  console.log("Server is working on port:",PORT)
})
