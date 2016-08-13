document.addEventListener('DOMContentLoaded', function(){
	var productDetailButtons = document.querySelectorAll('.details > a');

	Array.prototype.forEach.call(productDetailButtons, function(productDetailButton) {
		productDetailButton.addEventListener('click', function(event) {
			var linkElement = event.target;
			var detailContainer = linkElement.parentNode;
			var url = linkElement.getAttribute('href');

			// TODO: AJAX request


			//event.preventDefault();
		});
	});
});