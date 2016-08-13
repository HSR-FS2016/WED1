document.addEventListener('DOMContentLoaded', function() {
	var productDetailButtons = document.querySelectorAll('.details > a');

	Array.prototype.forEach.call(productDetailButtons, function(productDetailButton) {
		productDetailButton.addEventListener('click', function(event) {
			var linkElement = event.target;

			// get url from link element
			var url = linkElement.getAttribute('href');

			// create new AJAX request
			var request = new XMLHttpRequest();

			// handle successfull response
			request.onreadystatechange = function() {
				var status = request.status;
				if (request.readyState == 4 && (status == 200 || status == 201 || status == 304)) {

					// replace link by response
					linkElement.parentNode.innerHTML = request.responseText;
				}
			};

			// fire AJAX request
			request.open("GET", url);
			request.send();

			// prevent opening original link
			event.preventDefault();
		});
	});
});