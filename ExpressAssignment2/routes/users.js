const express=require('express');
const path=require('path')
const router=express.Router();

router.get('/users',(req,res,next)=>
{
    console.log("In users middleware");
    // res.send
    // (   `<form action="/admin/product" method="POST">
    //         <input type="text" name="title">
    //         <button type="submit"> Add Product</button>
    //     </form>`
    // );
    res.sendFile(path.join(__dirname,'views','users.html'))
});