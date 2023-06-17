//Write a node js script using file system which will 
//- create a new file 
//- add data to a file
//- append data to a file
//- read an html file and display it on the browser

var fs = require('fs');
var http = require("http");

//creating and adding data to the file
fs.writeFile('./myFile.txt',"Data added", (err,data) =>{
    if(err){
        console.log("Something went wrong : " + err);
    }
    else{
        console.log("File created. ");
    }
})

//appending data to the file.
fs.appendFile('./myFile.txt',"Data appended",(err,data)=>{
    if(err){
        console.log("Something went wrong : " + err);
    }
    else{
        console.log("File appended");
    }
})

http.createServer(function(req,res){

    fs.readFile("myHtml.html", function (err,data){
        res.writeHead(200,{
            "Content-Type": "text/html",
        });
        res.write(data);
        res.end("")
    });

}).listen(8080);