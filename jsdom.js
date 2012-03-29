var req,
    http = require('http'),
    jsdom = require('jsdom'),
    htmlContent = '',
    options = {
      host: 'tw.yahoo.com',
      port: 80,
      path: '/index.html',
      method: 'POST'
    };

console.log(htmlContent);

// Get service is working
req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        htmlContent += chunk;
    });
    res.on('end', function (chunk) {
        console.log(htmlContent);
        console.log('data is end\n');
    });
});

req.on('error', function(e) {
    console.log("Got error: " + e.message);
});

// notice have to add req end;
req.end();

