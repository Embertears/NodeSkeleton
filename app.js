var express = require( "express" );

var app = express();
var port = 2222;

app.use( express.static( "Public" ) );
app.use( express.static( "Views" ) );

app.listen( port, function( err ){
	console.log( "Running on port " + port );	
} );