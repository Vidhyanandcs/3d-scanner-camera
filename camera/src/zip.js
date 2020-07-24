const fs = require('fs')
const AdmZip = require('adm-zip')

const compress = () => {

    var uploadDir = fs.readdirSync((__dirname,'..','img'))

    const zip = new AdmZip()

    //adding to zip
    for(let i = 0; i < uploadDir.length; i++){

        zip.addLocalFile(`./img/${uploadDir[i]}`)

    }

    //Converting zip to buffer
    const cam01Images = zip.toBuffer()

    return(cam01Images)
}    

module.exports = compress