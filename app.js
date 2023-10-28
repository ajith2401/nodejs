const {readFile} =require("fs")

const getText = (path) =>{
    return new Promise((resolve,rejects)=>{
        readFile(path,"utf-8",(err,data)=>{
            if(err){
                rejects(err)

            }
            else{
                resolve(data)
            }
        })
    })
}

// getText("./content/first.txt").then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// readFile("./content/first.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     else{
//         console.log(data)
//     }

// })

const start = async()=>{
    try{
        const first = await getText("./content/first.txt")
        const second = await getText("./content/second.txt")
    console.log(first,second)
}
catch(error){console.log(error);
}
    
}

start()

// 3:06:53 https://www.youtube.com/watch?v=Oe421EPjeBE&t=6793s