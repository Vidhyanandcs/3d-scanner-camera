const express = require('express')
const shoot = require('./camera')
const zip = require('./zip')
const clear = require('./clear')

const app = express()

//Endpoint for testing
app.get('/test', function (req, res) {

    let remove = clear()

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

    shoot()

    const cam01Images = zip()

    //sending saved images to controller
    res.set('Content-Type','application/octet-stream')
    res.set('Content-Length',cam01Images.length)
    res.send(cam01Images)
    
})

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
