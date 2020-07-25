const { StillCamera } = require('pi-camera-connect')


const runApp = async () => {

    //For timestamp
    const date = new Date()
    const now = date.getTime()
    
    const stillCamera = new StillCamera()

    const stillCameraWP = new StillCamera({
        delay: 500 //delay of 500ms
    })

    //To get images with out projection
    const image = await stillCamera.takeImage()

    //To get images with projection
    const image1 = await stillCameraWP.takeImage()

    //saving images to local storage
    fs.writeFileSync(`./img/WPcam01${now}.jpg`, image) 
    fs.writeFileSync(`./img/Pcam01${now}.jpg`, image1)

}

runApp()

module.exports = runApp