$(document).ready(function () {
    var form = $('#contactForm');

    form.on('submit', function(event) {
        $.post(form.attr('action'), form.serialize(), function(data) {
            $('#status').get(0).innerHTML = data;
            form.get(0).reset();
        });
        event.preventDefault();
    });
});