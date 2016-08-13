(function($){
	$(function(){
		$("#send").click( function (){
			$('#sendContainer').append(
				$('#input').val() + '<br>'
			);
			$('#input').val("");
		});

		$("#input").keypress(function(event){
			if(event.keyCode == 13){
				/* disable default behaviour of 'enter': submitting form (= page reload) */
				event.preventDefault();
				$("#send").click();
			}
		});
	});
})(jQuery);
