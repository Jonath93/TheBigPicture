const express = require('express');

const server = express();

server.get('/',(req,res)=>{

    res.send('Hello express')
})

server.listen(4242,() => {
    console.log('Server is running...');
})