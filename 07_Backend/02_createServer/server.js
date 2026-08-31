const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello me hu gian')
})

app.get('/about',(req,res)=>{
    res.send('me hu bada takatwar')
})

app.listen(3000)