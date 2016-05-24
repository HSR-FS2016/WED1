/**
 * core
 */

function calculate(left, right, operator, callback) {
   var _left = parseFloat(left);
   var _right = parseFloat(right);
   if(operator === "+")
      return callback(_left + _right, null);
   if(operator === "-")
      return callback(_left - _right, null);
   if(operator === "/") {
      if(_right == 0)
         return callback(null, "Divide by zero error");
      return callback(_left / _right, null);
   }
   if(operator === "*")
      return callback(_left * _right, null);
}


/**
 * UI
 */

State = {
   READOP1: 1,
   READOPT: 2,
   READOP2: 3,
   ERROR:   4
}

var state = State.READOP1;
var op1 = "";
var op2 = "";
var opt = "";

var input;
var output;

function buttonNumClickHandler (event) {
   switch(state) {
   case State.READOP1:
      handleInput(event.target.value);
      break;
   case State.READOPT:
      handleInput(event.target.value);
      state = State.READOP2;
      break;
   case State.READOP2:
      handleInput(event.target.value);
      break;
   }
}

function handleInput(value) {
   op1 = op1 + "" + value;
   printScreen();
}

function buttonOpClickHandler(event) {
   switch(state) {
      case State.READOP1:
         opt = event.target.value;
         state = State.READOPT;
         op2 = op1; op1 = "";
         printScreen();
         break;
      case State.READOPT:
         opt = event.target.value;
         printScreen();
         break;
      case State.READOP2:
         equal();
         state = State.READOPT;
         break;
   }
}

function equal() {
   calculate(op2, op1, opt, function(result, error) {
      if(error) {
         printError(error);
      } else {
         op2 = result; op1 = ""; opt = "";
         printScreen();
      }
   });
}

function buttonCommandHandler(command) {
  if(command == "C") {
    op1 = ""; op2 = ""; opt = "";
    printScreen();
    state = State.READOP1;
  } else {
    switch(state) {
       case State.READOP1:
          break;
       case State.READOPT:
          if(op1 === "" && opt === "" && op2 !== "")
             break;
          state = State.ERROR;
          printError("Syntax Error");
          break;
       case State.READOP2:
          equal();
          state = State.READOPT;
          break;
    }
  }
}

function printScreen() {
   input.text(op1);
   output.text(op2 + " " + opt);
}

function printError(msg) {
   input.text("");
   output.text(msg);
}

$(document).on("ready", function() {
   $("#output").text("Welcome");
   $(".number").on("click", buttonNumClickHandler);
   $(".operator").on("click", buttonOpClickHandler);
   $(".command").on("click", function() {
     buttonCommandHandler($(this).html());
   });
   $("body").one("click", function() {

   });

   output = $("#output");
   input = $("#input");
});
