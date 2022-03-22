#!/usr/bin/env node
import insertText from 'insert-text-textarea';
function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
	//function to make the text in Lowercase using DOM method
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}
function myKeyPress(e){


		// Get current cursor position
		
		  var cursor_pos = $("#textarea1").prop('selectionStart');
		//  alert(cursor_pos);
		 
		

	var keynum;
  
	if(window.event) { // IE                  
	  keynum = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
	  keynum = e.which;
	}
console.log(keynum);
	var objReq = new XMLHttpRequest();
    objReq.open("GET", "http://localhost:8081/" + "?key=" + String.fromCharCode(keynum)+"?pos="+cursor_pos, false);
    objReq.send(null);
	//alert(String.fromCharCode(keynum));

	const textarea = document.getElementById("textarea1");


    // Don't use `getSelection()` if you want Firefox support
    const selectedText = keynum;
    insertText(textarea, '**' + String.fromCharCode(keynum) + '**');
	  
	
  }
