const express=require('express');

const expressApp=express();

expressApp.use('/add-product',(req,res,next)=>
{
    console.log("In add-product middleware");
    res.send('<h1>Hello from add-product</h1>');
});


expressApp.use('/',(req,res,next)=>
{
    console.log("In / middleware");
    res.send('<h1>Hello from Express</h1>');
});

// we dont really need this if we are using express
// const server = http.createServer(expressApp);

expressApp.listen(3000);
