/**
 * core
 */
var r1;
var r2;



/**
 * UI
 */

function buttonNumClickHandler (event) {
   document.getElementById('output').innerHTML = event.target.id.toString();
}

function buttonOpClickHandler (event) {
   document.getElementById('output').innerHTML = event.target.id.toString();
}

function buttonComClickHandler (event) {
   document.getElementById('output').innerHTML = event.target.id.toString();
}

function addClickHandlerToButton(handler, buttonClass) {
   var buttons = document.getElementsByClassName(buttonClass);
   var i;
   for (i = 0; i < buttons.length; i++) {
      buttons[i].onclick = handler;
   }
}


window.addEventListener('load', function() {
   
   addClickHandlerToButton(buttonNumClickHandler, 'number');
   addClickHandlerToButton(buttonOpClickHandler, 'operator');
   addClickHandlerToButton(buttonComClickHandler, 'command');

});
