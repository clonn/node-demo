var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./js/jquery.js").toString();
var obj = [];

jsdom.env({
  html: 'http://www.wretch.cc/blog/wretchbeauty/12760542',
  src: [
    jquery
  ],
  done: function(errors, window) {
    var $ = window.$;
    $(".innertext img").each(function (idx, el) {
        var nodeSrc = $(el).attr("src");
        console.log(nodeSrc);
        obj.push(nodeSrc);
    });
  }
});

var http = require('http');

var server = http.createServer(function(req, res){
     // your normal server code
     res.writeHead(200, {'Content-Type': 'application/json'});
     res.end(JSON.stringify(obj));
});
server.listen(8787);
