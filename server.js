const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
    resp.send("<h1>Hello!!!</h1>")
});

app.get('/home',(req,resp)=>{
    resp.send("<h1>Welcome to home</h1>")
});

app.listen(3000,function() {
    console.log("Running on 8000 port")
});
