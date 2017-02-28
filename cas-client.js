var express = require('express');
var app = express();

var port = 8000;

var mobileOptions = {
	index: 'index-mobile.html',
}
app.use('/mobile', express.static(__dirname + '/public', mobileOptions));

app.use('/', express.static(__dirname + '/public'));
app.listen(port, function () {
	  console.log('Flashcoin listening on port!', port);
});
