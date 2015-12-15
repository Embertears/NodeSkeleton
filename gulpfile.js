var gulp = require( "gulp" );
var inject = require( "gulp-inject" );
var wiredep = require( "wiredep" ).stream;


gulp.task( "injectDep", function() {
	var options = {
		bowerJson: require( "./bower.json" ),
		directory: "public/lib",
		ignorePath: "../public"
	};
	var injectSrc = gulp.src( [ "./public/Css/*.css", 
								"./public/Js/*.js" ] );
	var injectOptions = {
		ignorePath: "/public"
	};
	return gulp.src( "./Views/*.html" )
				.pipe( wiredep( options ) )
				.pipe( inject( injectSrc, injectOptions ) )
				.pipe( gulp.dest( "./Views" ) );
} );