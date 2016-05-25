/**
 * core
 */


var op1 = "";
var op2 = "";
var opt = "";

function setOp1(value) {
   op1 = value;
}

function setOp2(value) {
   op2 = value;
}

function setOpt(value) {
   opt = value;
}

function getOp1() {
   return op1;
}

function getOp2() {
   return op2;
}

function getOpt() {
   return opt;
}

function calculate(callback) {
   if(opt === "+")
      return callback(op2 + op1, null);
   if(opt === "-")
      return callback(op2 - op1, null);
   if(opt === "/") {
      if(op1 == 0)
         return callback(null, "Divide by zero error");
      return callback(op2 / op1, null);
   }
   if(opt === "*")
      return callback(op2 * op1, null);
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
   setOp1(getOp1() + "" + value);
   printScreen();
}

function buttonOpClickHandler(event) {
   switch(state) {
      case State.READOP1:
         setOpt(event.target.value);
         state = State.READOPT;
         setOp2(getOp1()); setOp1("");
         printScreen();
         break;
      case State.READOPT:
         setOpt(event.target.value);
         printScreen();
         break;
      case State.READOP2:
         equal();
         state = State.READOPT;
         break;
   }
}

function equal() {
   calculate(function(result, error) {
      if(error) {
         printError(error);
         state = State.ERROR;
      } else {
         setOp2(result); setOp1(""); setOpt("");
         printScreen();
      }
   });
}

function buttonCommandHandler(command) {
  if(command == "C") {
    setOp1("");setOp2("");setOpt("");
    printScreen();
    state = State.READOP1;
  } else {
    switch(state) {
       case State.READOP1:
          break;
       case State.READOPT:
          if(getOp1() === "" && getOpt() === "" && getOp2() !== "")
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
   input.text(getOp1());
   output.text(getOp2() + " " + getOpt());
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
