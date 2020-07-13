const express = require('express')
const { StillCamera } = require("pi-camera-connect")
const fs = require('fs')

const app = express()

const date = new Date()
const now = date.getTime()


app.get('/', function (req, res) {

    const runApp = async () => {
    
        const stillCamera = new StillCamera();
    
        const image = await stillCamera.takeImage();
    
        fs.writeFileSync("cam01"+now+".jpg", image);
    }

    runApp()

    res.send("Image captured and saved by cam01")
    
})
    
 

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
