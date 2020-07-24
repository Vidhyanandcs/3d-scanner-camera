const fs = require('fs')
const path = require('path')

const remove = () => {

    //Deleting the images in current folder
    fs.readdir((__dirname,'..','img'), (err, files) => {
        if (err) console.log(err)
        for (const file of files) {
            fs.unlink(path.join(__dirname,'..','img', file), err => {
                if (err) console.log(err)
            })
        }
    })

}

module.exports = remove
    