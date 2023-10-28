const exprees = require('express')
const app = exprees()

app.get('/',(req,res)=>{

    res.send("hello ajith")

})

app.listen(2000, console.log("listing port 2000"))