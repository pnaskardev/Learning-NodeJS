const fs = require('fs'); 

const  requestHandler=(req,res)=>
{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>
        {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end',()=>
        {
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,()=>
            {
                 // allows us to write metadata in one go
                //  This line should only start when the file
                // writing process is done
                
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
           
        });
    }

    /*
        any lines of code 
        dfahgbw,kfhwkf
    */
};
// exports this file
module.exports=requestHandler;

