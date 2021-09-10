const express = require('express')
const app = express()
const PORT1 = process.env.PORT1 || 8001

app.use('*',(req,res)=>{
    return res.status(200).json({
        message : 'Hey This is server 1'
    });
})

app.listen(PORT1, () => {
  console.log(`Application for server1 started on ${PORT1}`)
})
