$(document).ready(function () {
    var suggestionAPI = 'http://localhost:8080/suggestions?search='
    var fromField = $('#from');
    var suggestions = $('#suggestions');

    fromField.on('input', function() {
        if(fromField.val().length >= 3) {
            $.get(suggestionAPI+fromField.val(), function(suggestionData) {
                // .html() is slow in some Browsers
                suggestions.get(0).innerHTML = suggestionData;
            });
        } else {
            suggestions.empty();
        }
    });
});