const express = require('express')
const app = express()
const PORT3 = process.env.PORT3 || 8003

app.use('*',(req,res)=>{
    return res.status(200).json({
        message : 'Hey This is server 3'
    });
})

app.listen(PORT3, () => {
  console.log(`Application for server3 started on ${PORT3}`)
})
