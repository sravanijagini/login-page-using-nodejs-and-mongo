var express = require('express');
var app = express();
var port = 8888;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var newUser = mongoose.model('newUser', { name: String , password : String});


app.get('/', function (req, res, next) {
 res.sendFile( '/home/sravani/node.js/modb/myapp' + '/form.html');
});

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});


app.post('/', function(req, res){    

      var username = req.body.name;
      var password = req.body.password;

      var user = new newUser({ name: username , password: password});
      user.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('added');
          }
      });
      res.send('user added');

});
