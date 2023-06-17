//What is a URL. Break it down into several parts that the url consists of. 
//Use URL module to write a nodejs script to show the breakdown parts of a url as well.

/*Ans => URL(Uniform Resource Locator) is a string used to locate resources on the internet. The various parts of an URL include: -
        1) protocol:communication protocol used. (http/https)
        2) slashes
        3) auth
        4) host: domain name/ ip of the host.
        5) search 
        6) query: specific instructions/ data to the server.
        7) pathname 
        8) path: location of the file.
        8) href
*/
var url = require('url')
console.log(url.parse("https://lovelyprofessionaluniversity.codetantra.com/secure/tla/jnr.jsp?m=7a7d80e7-2260-37c3-8bb1-984d7808f28d",true));