const express=require('express');


const app=express();

app.use('/users',(req,res,next)=>
{
    console.log('inside the use middleware');
    res.send('<h1>displaying the list of users</h1>');
    // next();
});

app.use('/',(req,res,next)=>
{
    console.log('inside the home middleware');
    res.send('<h1>this is the Home Page</h1>');
});

app.listen(3000);