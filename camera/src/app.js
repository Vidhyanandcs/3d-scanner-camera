const express = require('express')
const { StillCamera } = require('pi-camera-connect')
const fs = require('fs')

const app = express()

const date = new Date()
const now = date.getTime()

//To get images with out projection
app.get('/imgnp', function (req, res) {

    const runApp = async () => {
    
        const stillCamera = new StillCamera()
    
        const image = await stillCamera.takeImage()

        //saving to local storage
        //fs.writeFileSync("/img/cam01"+now+".jpg", image) 

        //sending image to controller
        res.set('Content-Type', 'image/jpg')
        res.send(Buffer.from(image)) 

    }

    runApp()
    
})

//To get images with projection
app.get('/imgp', function (req, res) {

    const runApp = async () => {
    
        const stillCamera = new StillCamera()
    
        const image1 = await stillCamera.takeImage()

        //saving to local storage
        fs.writeFileSync("/img/cam01"+now+".jpg", image1) 

        //sending image to controller
        res.set('Content-Type', 'image/jpg')
        res.send(Buffer.from(image)) 

    }

    runApp()
    
})
    
 

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
