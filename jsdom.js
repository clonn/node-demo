var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./js/jquery.js").toString();
var sourceUrl = process.argv[2];

function fetchImg (url) {
    jsdom.env({
      html: url,
      src: [
        jquery
      ],
      done: function(errors, window) {
        var $ = window.$;
        $(".innertext img").each(function (idx, el) {
            var nodeSrc = $(el).attr("src");
            console.log(nodeSrc);
        });
      }
    });
}

// fetch url
fetchImg(sourceUrl);
