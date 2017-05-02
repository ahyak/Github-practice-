const express = require('express')
const app = express()
const PORT = 3000

add.get('/', function (req, res){
  var message= "I don't know what I'm doing"
  res.send(message)
})

add.listener(3000, function(){
  console.log("Server is working on port:",PORT)
})
