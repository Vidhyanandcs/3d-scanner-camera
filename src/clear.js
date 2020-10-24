const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const remove = () => {

    return new Promise((accept, reject) =>{

        rimraf('./img/*', function () { console.log('done'); });

    })

}

module.exports = remove
    