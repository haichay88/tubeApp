var request = require('request');
var url='http://144.202.115.228:2000';
var api = {
    getVideo: function (id,callback) {
        
        
        request.get(url+'/video/'+id, function (error, response, body) {
           // console.log('error:', error); // Print the error if one occurred
           // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
           // console.log('body:', body); // Print the HTML for the Google homepage.
           //console.log(response);
           
            callback(body);
        });
    },
    postVideo: function (data) {
        request.post({
            url: url+'/video/',
            form: data
        }
            , function (error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.

            });
    }
}
module.exports = api;