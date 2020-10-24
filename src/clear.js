const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const remove = () => {

    return new Promise(resolve => rimraf('./img/*',resolve))

}

module.exports = remove
    