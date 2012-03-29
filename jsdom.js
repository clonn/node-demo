var req,
    http = require('http'),
    options = {
      host: 'tw.yahoo.com',
      port: 80,
      path: '/index.html',
      method: 'POST'
    };

// Get service is working
req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log("Got error: " + e.message);
});

// notice have to add req end;
req.end();
