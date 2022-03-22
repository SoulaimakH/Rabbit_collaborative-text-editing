(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i])
	{var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);
	var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r)
	{var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}
for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){

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
	var keynum;
  
	if(window.event) { // IE                  
	  keynum = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
	  keynum = e.which;
	}

	const { exec } = require('child_process');
	//var keynum="d";
	exec(`node emit_log_direct.js A ${keynum}`, (err, stdout, stderr) => {
	  if (err) {
		//some err occurred
		console.error(err)
	  } else {
	   // the *entire* stdout and stderr (buffered)
	   console.log(`stdout: ${stdout}`);
	   console.log(`stderr: ${stderr}`);
	  }
	});
	//alert(String.fromCharCode(keynum));
  }
},{"child_process":1}]},{},[2]);
