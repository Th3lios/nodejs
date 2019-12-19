const fs = require('fs')

const requestHandler = (req,res) => {

    if (req.url === '/'){
        res.write('<html>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message" placeholder="Write Something...">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</html>')
        return res.end()
    }
    
    if (req.url === '/message' && req.method === 'POST'){
    
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        }); // Listener
    
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt",message, (err)=>{
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end();
            })
            
        });
    }
    
    res.write('<html>')
    res.write('<h1>You got in!</h1>')
    res.write('</html>')
    res.end()
};

module.exports = requestHandler

/* module.exports = {
    requestHandler,
} */

//module.exports.handler = requestHandler
//exports.handler = requestHandler