const fs = require('fs')
const express = require('express')
const axios = require('axios')


const app = express()

//For timestamp
const date = new Date()
const now = date.getTime()

//Get request for images without projection
axios.all([

    axios.get("http://192.168.43.100:3000/capture", {  

            headers: {
              Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

    }), 
    axios.get("http://192.168.43.102:3000/capture", {  

        headers: {
          Accept: 'application/zip',
        },
        responseType: 'arraybuffer',
        
    }) 

]).then(axios.spread((response1, response2) => {

    //saving to local storage
    fs.writeFileSync(`./img/cam01${now}.zip`,response1.data) 
    fs.writeFileSync(`./img/cam02${now}.zip`,response2.data)
    
})).catch(error => {
    console.log(error)
})


app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
