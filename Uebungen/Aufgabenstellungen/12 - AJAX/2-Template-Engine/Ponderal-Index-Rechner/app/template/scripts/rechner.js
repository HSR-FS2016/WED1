(function($){
	function serializeFormToObject(form){
		var data = {};
		form.serializeArray().map(function(entry) {
			data[entry.name] = entry.value;
		});
		return data;
	}

	var config = {
		defaultWeight: 80,
		defaultHeight: 1.80,
		formTemplateUrl: 'templates/form.html',
		resultTemplateUrl: 'templates/result.html',
		apiUrl: '/ponderal'
	};

	$(document).ready(function(){
		var appContainer = $('#app-container');

		function applyTemplate(templateSource, data) {
			// TODO:

		}

		function renderResult(data) {
			// TODO

		}

		function submitForm(event) {
			// TODO

		}

		// TODO


	});
}(jQuery));
