const express = require('express')
const app = express()
app.get('/user', (req, res)=>{
    res.send({username:'david'});
});
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})
