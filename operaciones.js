const express = require('express')
const enrutador =express.Router()
enrutador.get('/suma/:numero1/:numero2', (req ,res)=>{

 //console.log(req)
    let numero1= parseInt (req.params['numero1'])
    parseInt(numero1)
    console.log(numero1)
    let numero2= parseInt(req.params['numero2'])
    parseInt(numero2)
    console.log(numero2)
    let suma = numero1 + numero2

    let json ={info: "SUMA"}
    json.numero1=numero1
    json.numero2=numero2
    json.suma=suma
    res.send(json)

} )
enrutador.get('/resta/:numero1/:numero2', (req ,res)=>{
      //console.log(req)
    let numero1= parseInt (req.params['numero1'])
    parseInt(numero1)
    console.log(numero1)
    let numero2= parseInt(req.params['numero2'])
    parseInt(numero2)
    console.log(numero2)
    let resta = numero1 - numero2

    let json ={info: "RESTA"}
    json.numero1=numero1
    json.numero2=numero2
    json.resta=resta
    res.send(json)
} )
enrutador.get('/multiplicacion/:numero1/:numero2', (req ,res)=>{
    //console.log(req)
    let numero1= parseInt (req.params['numero1'])
    parseInt(numero1)
    console.log(numero1)
    let numero2= parseInt(req.params['numero2'])
    parseInt(numero2)
    console.log(numero2)
    let multiplicacion = numero1 * numero2

    let json ={info: "MULTIPLICACION"}
    json.numero=numero1
    json.numero2=numero2
    json.multiplicacion=multiplicacion
    res.send(json)
} )
enrutador.get('/division/:numero1/:numero2', (req ,res)=>{
    //console.log(req)
    let numero1= parseInt (req.params['numero1'])
    parseInt(numero1)
    console.log(numero1)
    let numero2= parseInt(req.params['numero2'])
    parseInt(numero2)
    console.log(numero2)
    let division = numero1 / numero2

    let json ={info: "DIVISION"}
    json.numero1=numero1
    json.numero2=numero2
    json.division=division
    res.send(json)
} )
module.exports = enrutador