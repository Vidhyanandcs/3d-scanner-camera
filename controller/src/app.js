const fs = require('fs')
const path = require('path')
const express = require('express')
const axios = require('axios')
const hbs = require('hbs')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {

    res.render('index')

})

//For timestamp
const date = new Date()
const now = date.getTime()

app.get('/test', (req,res) => {

    //Get request for testing
    axios.all([

        axios.get("http://192.168.43.100:3000/test"), 
        
        axios.get("http://192.168.43.102:3000/test") 

    ]).then(axios.spread((response1, response2) => {

        res.render('final', {
            cam01:`cam01: ${response1.data}`,
            cam02:`cam01: ${response2.data}`
        })
        
        
    })).catch(error => {
        console.log(error)
    })

})

app.get('/shoot', (req,res) => {

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

        res.render('final', {
            cam01:`cam01: ${response1.statusText}`,
            cam02:`cam01: ${response2.statusText}`
        })
        
        
    })).catch(error => {
        console.log(error)
    })


})




app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
