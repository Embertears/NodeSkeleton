$( function() {
console.log( "I am loaded!" );
var myNumbers = [ 1, 1, 2, 3, 4, 5, 5, 6 ];

myNumbers.forEach( function( element ) {
	$( ".arrayVanilla" ).append( element );
}, this );

var uniqueNumbers = _.uniq( myNumbers );

uniqueNumbers.forEach( function( element ) {
	$( ".arrayUS" ).append( element );
} );

} );