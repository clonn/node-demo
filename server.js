var express = require('express')
  , app = express.createServer();

var users = [{ name: 'tj' }];

app.all('/user/:id/:op?', function(req, res, next){
  req.user = users[req.params.id];
  if (req.user) {
    console.log("what is next");
    next();
  } else {
    next(new Error('cannot find user ' + req.params.id));
  }
});

app.get('/user/:id', function(req, res){
  console.log("get ID is next");
  res.send('viewing ' + req.user.name);
});

app.get('/user/:id/edit', function(req, res){
  console.log("edit ID is next");
  res.send('editing ' + req.user.name);
});

app.put('/user/:id', function(req, res){
  console.log("put ID is next");
  res.send('updating ' + req.user.name);
});

app.get('*', function(req, res){
  console.log(" * ID is next");
  res.send('what???', 404);
});

app.listen(3000);
