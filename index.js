const express = require("express")
const server = express()    

//POST tasks
server.post("/tasks", function(req,res){
    res.status(404)
    res.send("NOT FOUND")
})
//GET tasks
server.get("/tasks", function(req,res){
    res.status(404)
    res.send("NOT FOUND")
})

//GET tasks/:id
server.get("/tasks", function(req,res){
    res.status(404)
    res.send("NOT FOUND")
})

//PATCH tasks/:id
server.patch("/tasks", function(req,res){
    res.status(404)
    res.send("NOT FOUND")
})

//DELETE tasks/:id
server.delete("/tasks", function(req,res){
    res.status(404)
    res.send("NOT FOUND")
}) 

server.listen(3000)