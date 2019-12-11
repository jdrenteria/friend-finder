var express = require('express');

var path = require( 'path');

var app = express();
var port = process.env.PORT || 3000;


// EXPRESS DATA PARSING CAPABILITIES
app.use(express.static('app/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, "app/public")));
 // ================================================================================
// ROUTER
// The below points our server to a series of “route” files.
// These routes give our server a “map” of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(port, () => console.log ('App is running on port %s',port));
