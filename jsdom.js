#!/usr/bin/env node

var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./js/jquery.js").toString();
var HTTP_TYPE = /^http/;
var sourceUrl = process.argv[2] || "";

// fetch image function.
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

// check parameter style.
if (sourceUrl.match(HTTP_TYPE)) {
    fetchImg(sourceUrl);
} else {
    if (process.argv[1].match(HTTP_TYPE)) {
        fetchImg(sourceUrl);
    } else {
        console.log("Parameter need a url type.");
    }
}
