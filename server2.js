const express = require('express')
const app = express()
const PORT2 = process.env.PORT2 || 8002

app.use('*',(req,res)=>{
    return res.status(200).json({
        message : 'Hey This is server 2'
    });
})

app.listen(PORT2, () => {
  console.log(`Application for server2 started on ${PORT2}`)
})
