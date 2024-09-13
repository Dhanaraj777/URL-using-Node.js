
const http = require("http")
const fs = require("fs")
const url = require("url")
const { log } = require("console")


let webserver = http.createServer((req,res)=>
{
    if(req.url === '/favicon.ico') return res.end("hi")
    let myurl = url.parse(req.url,true)
    console.log(myurl)
    // res.end("Hello welcome")
    let username = myurl.query.myName
    res.end(`Hi ${username}`)
})

webserver.listen(8000,()=> console.log("hey there !"))