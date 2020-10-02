const express = require('express')
const shoot = require('./camera')
const zip = require('./zip')
const clear = require('./clear')

const app = express()

//Endpoint for testing
app.get('/test', function (req, res) {

    clear()

    shoot()

    const cam01Images = zip()

    if(cam01Images){
        res.send('Working')
    }else{
        res.send('Not Working')
    } 
    
})

//Endpoint for capturing
app.get('/capture', function (req, res) {

    clear()

    const result = shoot()

    if(result == true){

        const cam01Images = zip()


        //sending saved images to controller
        res.set('Content-Type','application/octet-stream')
        res.set('Content-Length',cam01Images.length)
        res.send(cam01Images)

    } else {

        let enc = new TextEncoder()
        let message = enc.encode('There is a problem with hardware')
        let bufferMessage = message.buffer
        res.status(503).send(bufferMessage)


    } 
    
})

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
