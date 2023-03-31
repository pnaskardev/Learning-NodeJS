const express=require('express');
const expressApp=express();

const path=require('path')

const userRoute=require('./routes/user');

expressApp.use(express.static(path.join(__dirname,'public')));

expressApp.use(userRoute);
expressApp.use((req,res,next)=>
{
    // res.status(404).send('<h1>page not found</h1>')
    res.status(200).sendFile(path.join(__dirname,'views','home.html'))
});