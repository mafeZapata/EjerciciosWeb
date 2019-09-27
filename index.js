const express = require('express')
const app = express()

app.use('/',(req, res, next) =>{
    //res.send("saludos desde api")
    console.log("paso por aca")
    next()
})


const enrutadorOperaciones = require('./routes/operaciones.js')
app.use(enrutadorOperaciones)
app.use("/", (req,res) =>{
    console.log("no se encontró")
    res.status(404).send("no se encontró")
})



 const port = 3100
app.listen(port , function() {
    console.log('se esta ejecutando desde el puerto: '+ port)
})