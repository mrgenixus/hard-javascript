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


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
