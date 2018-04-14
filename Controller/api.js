var request = require('request');

var api = {
    getVideo: function (id,callback) {
        var url='http://localhost:3000/video/'+id;
        
        request.get(url, function (error, response, body) {
           // console.log('error:', error); // Print the error if one occurred
           // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
           // console.log('body:', body); // Print the HTML for the Google homepage.
           //console.log(response);
           
            callback(body);
        });
    },
    postVideo: function (data) {
        request.post({
            url: 'http://localhost:3000/video',
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