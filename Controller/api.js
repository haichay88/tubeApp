var request = require('request');

var api={
getVideo:function(callback){
    request.get('http://localhost:3000/videos', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    
    });
},
postVideo:function(data){
    request.post({url:'http://localhost:3000/video', 
    form:data}
    , function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    
    }); 
}
}
module.exports = api;