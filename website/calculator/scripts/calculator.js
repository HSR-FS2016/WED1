/**
 * core
 */

function calculate(left, right, operator) {
   var _left = parseInt(left);
   var _right = parseInt(right);
   if(operator === "+")
      return _left + _right;
   if(operator === "-")
      return _left - _right;
   if(operator === "/") {
      if(_right == 0)
         return "divide by zero error";
      return _left / _right;
   }
   if(operator === "*")
      return _left * _right;
}



/**
 * UI
 */

var operand = "";
var operator = "";

var output;
var input;

function buttonNumClickHandler (event) {
   input.text(input.text() + event.target.value);
}

function buttonOpClickHandler (event) {
   operator = event.target.value;
   if(operand === "") {
      operand = input.text();
      input.text("");
   }
   output.text(operand + " " + operator);
   
}

function buttonEqualClickHandler (event) {
   if(operand === "" || operand === "" || input.text() === "") {
      output.text("error");
      return;
   }

   var result = calculate(operand, input.text(), operator);

   operand = result;
   operator = "";
   input.text("");
   output.text(operand + " " + operator);
}

function buttonClearClickHandler (event) {
   input.text("");
   output.text("");
   operand = "";
   operator = "";
}

$(document).on("ready", function() {
   $("#output").text("Welcome");
   $(".number").on("click", buttonNumClickHandler);
   $(".operator").on("click", buttonOpClickHandler);
   
   $(".equal").on("click", buttonEqualClickHandler);
   $(".clear").on("click", buttonClearClickHandler);
   $("body").one("click", function() {
      $("#output").text("");
   });

   output = $("#output");
   input = $("#input");
});

