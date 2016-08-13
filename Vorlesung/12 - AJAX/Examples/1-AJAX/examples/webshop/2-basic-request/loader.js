document.addEventListener('DOMContentLoaded', function() {
	// get url from first link element
	var url = document.querySelector('.details > a').getAttribute('href');

	// create new AJAX request
	var request = new XMLHttpRequest();

	// handle successfull response
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			window.alert(request.responseText);
		}
	};

	// fire AJAX request
	request.open("GET", url);
	request.send();
});