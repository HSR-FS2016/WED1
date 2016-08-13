$(document).ready(function () {
    var suggestionAPI = 'http://localhost:8070/suggestions?search='
    var fromField = $('#from');
    var suggestionListElement = $('#suggestions');

    // TODO: load template from suggestions.html

        // TODO: compile suggestion template


        fromField.on('input', function() {
            if(fromField.val().length >= 3) {
                // TODO: load JSON suggestions



                    // TODO: render view from template


                    suggestionListElement.get(0).innerHTML = view;
                });
            } else {
                suggestionListElement.empty();
            }
        });
    });
});