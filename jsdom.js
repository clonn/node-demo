var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./js/jquery.js").toString();
var sourceUrl = [
        'http://www.wretch.cc/blog/wretchbeauty/12760490',
        'http://www.wretch.cc/blog/wretchbeauty/12760527',
        'http://www.wretch.cc/blog/wretchbeauty/12760512'
    ];

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

sourceUrl.forEach(function (el, idx) {
    fetchImg(el);
});

