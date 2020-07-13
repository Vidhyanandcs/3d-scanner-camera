const express = require('express')
const axios = require('axios')

const app = express()

axios.all([

    axios.get('http://192.168.99.99:3000'), //dummy
    axios.get('http://192.168.99.99:3000') //dummy

]).then(axios.spread((response1, response2) => {

    console.log(response1.data)
    console.log(response2.data)
    
})).catch(error => {
    console.log(error)
})


app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})

