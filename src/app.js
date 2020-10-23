const express = require('express')
const clear = require('./clear')
const shoot = require('./camera')
const zip = require('./zip')


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

    clear().then(()=>{

        shoot().then(() => {

            zip().then((file) =>{

                //sending saved images to controller
                const cam01Images = file
                res.set('Content-Type','application/octet-stream')
                res.set('Content-Length',cam01Images.length)
                res.send(cam01Images)

            }).catach(()=>{
                console.log(error)
            })


        }).catch((error)=>{

            console.log(error)
        })

    }).catach((error)=>{
        console.log(error)
    })   
    
})

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
