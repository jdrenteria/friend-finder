var express = require('express');

var path = require( 'path');

var app = express();
var port = process.env.PORT || 3000;



app.listen(port, () => console.log ('App is running on port %s',port));
