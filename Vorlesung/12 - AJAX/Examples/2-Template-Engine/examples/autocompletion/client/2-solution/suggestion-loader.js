$(document).ready(function () {
    var suggestionAPI = 'http://localhost:8080/suggestions?search='
    var fromField = $('#from');
    var suggestionListElement = $('#suggestions');
    console.log(fromField);
    $.get('suggestions.html', function(suggestionsTemplate) {
        // compile suggestion template
        var viewRenderer = Handlebars.compile(suggestionsTemplate);

        fromField.on('input', function() {
            if(fromField.val().length >= 3) {
                $.getJSON(suggestionAPI+fromField.val(), function(suggestionData) {
                    // get suggestions list from JSON object
                    var suggestions = suggestionData.suggestions;
                    // render view from template
                    var view = viewRenderer({ suggestions: suggestions });
                    // .html() is slow in some Browsers
                    suggestionListElement.get(0).innerHTML = view;
                });
            } else {
                suggestionListElement.empty();
            }
        });
    });
});
