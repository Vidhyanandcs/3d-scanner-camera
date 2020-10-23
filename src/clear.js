const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const remove = () => {

    rimraf('./img/*', function () { console.log('done'); });

}

module.exports = remove
    