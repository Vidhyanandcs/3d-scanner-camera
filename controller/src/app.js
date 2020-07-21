const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()

//For timestamp
const date = new Date()
const now = date.getTime()

//Get request for images without projection
axios.all([

    axios.get('http://192.168.43.100:3000/imgnp'), 
    axios.get('http://192.168.43.102:3000/imgnp') 

]).then(axios.spread((response1, response2) => {

    //saving to local storage
    fs.writeFileSync("./imgnp/cam01"+now+".jpg", response1.data.image) 
    fs.writeFileSync("./imgnp/cam02"+now+".jpg", response2.data.image)
    
})).catch(error => {
    console.log(error)
})

//Get request for images with projection
axios.all([

    axios.get('http://192.168.43.100:3000/imgp'), 
    axios.get('http://192.168.43.102:3000/imgp') 

]).then(axios.spread((response1, response2) => {

    //saving to local storage
    fs.writeFileSync("./imgnp/cam01"+now+".jpg", response1.data.image) 
    fs.writeFileSync("./imgnp/cam02"+now+".jpg", response2.data.image)
    
})).catch(error => {
    console.log(error)
})


app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
