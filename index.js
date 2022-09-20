const server = require("./server")
const database = require("./database")


//POST tasks
server.post("/tasks", function(req,res){
    database("tasks").
        insert(req.body).
        then(function(data) {
            res.status(201)
            res.json(data)
        }).
        catch(function(error){
            res.status(500)
            res.json(error)
        })
        
})
//GET tasks
server.get("/tasks", function(req,res){
    database("tasks").
        then(function(data){
            res.json(data)
        }).
        catch(function(error){
            res.status(500)
            res.json(error)
        })
})

//GET tasks/:id
server.get("/tasks", function(req,res){
    database("tasks").
    then(function(data){
        res.json(data)
    }).
    catch(function(erro){
        res.status(500)
        res.json(error)
    })

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