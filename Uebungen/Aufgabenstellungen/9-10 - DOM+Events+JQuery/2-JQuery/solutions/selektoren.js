(function($) {
	$(function() {
print( $('#head > title').text() );
print( $('#td th').first().text() );
print( $('tr').length );
print( $('#age').val() + 10 );
print( function() { if($('#sex').val()) { return "t"; } else { return "f"; } }() );
print( typeof($('#age2').val()-7) );
print( typeof($('#sex').html) );
print( $('#th > td').text() );
	});
	
	function print(toPrint) {
		console.log("[" + toPrint + "]");
	}

	$("body").on("click", "a", function(event){
		console.log("body with filter - click " + event.target.nodeName); event.preventDefault();
	});
})(jQuery);