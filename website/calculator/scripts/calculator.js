/**
 * core
 */
var register2 = "";
var register1 = "";
var operation = "";

function setOperation(_operation) {
   operation = _operation;
   register2 = register1;
   register1 = "";
}


/**
 * UI
 */

function buttonNumClickHandler (event) {
   $("#input").append(event.target.value);
   register1 = $("#input").text(); //toNum
}

function buttonOpClickHandler (event) {
   setOperation(event.target.value);
   render();
}

function buttonComClickHandler (event) {
   
}

function render() {
   $("#output").text(register2 + " " + operation);
   $("#input").text(register1);
}

$(document).on("ready", function() {
   $("#output").text("Welcome");
   $(".number").on("click", buttonNumClickHandler);
   $(".operator").on("click", buttonOpClickHandler);
   $(".command").on("click", buttonComClickHandler);
   $("button").one("click", function() {
      $("#output").text("");
   });
});

