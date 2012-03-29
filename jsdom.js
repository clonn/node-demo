var http = require('http');
var options = {
  host: 'tw.yahoo.com',
  host: 'clonn.info',
  port: 80,
  path: '/index.html',
  path: '/lalila.html'
};

// Get service is working
http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    var status = {
        '200': true,
        '302': true
    };

    if (status[res.statusCode]) {
        console.log("service is working");
    } else {
        console.log("service is fail");
    }
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
