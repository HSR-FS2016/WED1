(function ($) {
    sayHello = function() {
        var outputField = $('#output');
        outputField.html(
            $("#vorname").val() + " " +
            $("#nachname").val() + " " +
            getHelloCount() + "x" );
    };
    function getHelloCount() {
        if (!window.helloCount) {
            window.helloCount = 1;
        }
        return window.helloCount++;
    }
})(jQuery);