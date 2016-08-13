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
			var template = Handlebars.compile(templateSource);
			var view = template(data);
			appContainer.html(view);
		}

		function renderResult(data) {
			$.get(config.resultTemplateUrl, function(resultTemplateSource) {
				applyTemplate(resultTemplateSource, data);
			});
		}

		function submitForm(event) {
			var formData = serializeFormToObject($(event.target));
			$.ajax({
				type: 'POST',
				url: config.apiUrl,
				data: JSON.stringify(formData),
				contentType: "application/json",
				dataType: 'json'
			})
			.done(renderResult);

			event.preventDefault();
		}

		$.get(config.formTemplateUrl, function(formTemplateSource) {
			applyTemplate(formTemplateSource, config);
			$('#ponderal-form').on('submit', submitForm);
		});
	});


	/**
	 *   alternative solution using $.when()
	 *
	$(document).ready(function () {
		// ajax core
		function loadTemplate(url) {
			var def = $.Deferred();
			$.get(url, function (formTemplateSource) {
				def.resolve(Handlebars.compile(formTemplateSource));
			});
			return def;
		}

		function getPonderal(toSend) {
			return $.ajax({
				type: 'POST',
				url: config.apiUrl,
				data: JSON.stringify(toSend),
				contentType: "application/json",
				dataType: 'json'
			});
		}

		// bootstrapper
		function init() {
			$.when(loadTemplate(config.formTemplateUrl), loadTemplate(config.resultTemplateUrl)).done(function (formTemplate, resultTemplate) {
				$(document).ready(function () {
					renderPage(formTemplate, resultTemplate)
				});
			})
		}

		init();

		// UI
		function renderPage(formTemplate, resultTemplate) {
			var appContainer = $('#app-container');

			var formView = formTemplate(config);
			appContainer.html(formView);

			var form = $('#ponderal-form');
			var calculateButton = $('#calculate');

			calculateButton.click(function () {
				var formData = serializeFormToObject(form);

				getPonderal(formData).done(function (data) {
					var resultView = resultTemplate(data);
					appContainer.html(resultView);
				});
			});
		}
	});
	*/
}(jQuery));