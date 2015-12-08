var express = require('express');
var layout = require('express-layout');
var expressLess = require('express-less');

var app = express();

app.use(express.static('public'));
app.use('/css', expressLess(__dirname + '/assets/less'));
app.use('/js', express.static('node_modules/uikit/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));
app.use('/uikit', expressLess(__dirname + '/node_modules/uikit/dist/less'));
app.use('/fonts', express.static('node_modules/uikit/dist/fonts'));

app.use(layout());

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/introduction', function(req, res) {
  res.render('introduction');
});

app.get('/closures', function(req, res) {
  res.render('closures');
});

app.use('/closures/', express.static(__dirname + '/views/closures'));

app.get('/dynamic-receivers', function(req, res) {
  res.render('dynamic_receivers');
});

app.get('/call-and-apply', function(req, res) {
  res.render('call_and_apply');
});

app.get('/callback-functions', function(req, res) {
  res.render('callback_functions');
});



app.get('/thank-you', function(req, res) {
  res.render('thank_you');
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
