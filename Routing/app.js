var url = require('url');
var fs = require('fs');


function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write(error);
        }
        else{
            response.write(data);
        }
        response.end();
    })

}

module.exports= {
    handleRequest : function(request, response){
        response.writeHead(200,{'Content-type' : 'text/html'})
        var path = url.parse(request.url, true).pathname;
       // console.log(path)
        switch(path){
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;

            default:
                response.writeHead(404);
                response.write('Path not defined.');
                response.end();

        }
        
    }
}