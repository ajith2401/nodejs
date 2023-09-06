// built in modules 
// os http path fs

const os = require('os') 

// info about current user

const infoAbout  = os.userInfo()

console.log(infoAbout)

// method returns the system uptime in sec

console.log(`the system uptime ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)