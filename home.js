#!/usr/bin/env node
//import { returnX } from 'C:\Users\octanet\OneDrive\Bureau\js txt_ed\new_node/rec.js';
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



var url ="";
var key="";
var pos=null;
var symbole="";



function myKeyPress(e){
	
	/*var objReq = new XMLHttpRequest();
    objReq.open("GET", "http://localhost:3004", false);
    objReq.send(null);
	console.log("re"+objReq.getResponseHeader)
	*/
		// Get current cursor position
		//console.log(returnX())
		  var cursor_pos = $("#textarea1").prop('selectionStart');
		//  alert(cursor_pos);
		 
		
		if (e.ctrlKey==false) {
			
	var keynum;
  
	if(window.event) { // IE                  
	  keynum = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
	  keynum = e.which;
	}
	
console.log("="+e.key+"=");

//document.getElementById("textarea2").value =""+textArea+String.fromCharCode(keynum);
this.url="http://localhost:8081/" + "?key=" + e.key+"pos"+cursor_pos;

	load();

//load( );
window.setTimeout(() => {
	load2();
  }, 450);

console.log("sy"+symbole);

console.log("fin");

let textArea = document.getElementById('textarea2').value;
let textArea3 = document.getElementById('textarea3').value;

window.setTimeout(() => {
	console.log("timer2 "+$("#"+"textarea2").val().length);
	console.log(this.symbole);
	console.log("sl"+$("#"+"textarea2").val());
if(this.symbole==="Backspace"){


  $("#"+"textarea2").val( textArea.slice(0,this.pos-1) + textArea.slice(this.pos));
  $("#"+"textarea3").val( textArea3.slice(0,this.pos-1) + textArea3.slice(this.pos));
 //$('#text1').val(tx+""+textArea.slice(this.pos+1,$("#"+"textarea2").val().length));
}
else if(this.symbole==="Enter"){
	$('#textarea2').val(textArea.slice(0,this.pos)+"\n"+textArea.slice(this.pos));
	$('#textarea3').val(textArea3.slice(0,this.pos)+"\n"+textArea3.slice(this.pos));
}

else if(this.symbole===""){
	$('#textarea2').val(textArea.slice(0,this.pos)+" "+textArea.slice(this.pos));
	$('#textarea3').val(textArea3.slice(0,this.pos)+" "+textArea3.slice(this.pos));
}


else{
  $('#textarea2').val(textArea.slice(0,this.pos)+this.symbole+textArea.slice(this.pos));
  $('#textarea3').val(textArea3.slice(0,this.pos)+this.symbole+textArea3.slice(this.pos));

}
  },500);
		}

		else{
			console.log("="+e.key+"=");
			if(e.key=='v'){
				navigator.clipboard
  .readText()
  .then((copiedText) => {


	this.url="http://localhost:8081/" + "?key=" +copiedText+"pos"+cursor_pos;

	load();

//load( );
window.setTimeout(() => {
	load2();
  }, 450);

console.log("sy"+symbole);

console.log("fin");

let textArea = document.getElementById('textarea2').value;
let textArea3 = document.getElementById('textarea3').value;

window.setTimeout(() => {
	


 $('#textarea2').val(textArea.slice(0,this.pos)+this.symbole+textArea.slice(this.pos));
  $('#textarea3').val(textArea3.slice(0,this.pos)+this.symbole+textArea3.slice(this.pos));

  },500);



});
				










			}
		}
  }


 
  //texeara2
  function myKeyPress2(e){
	
	/*var objReq = new XMLHttpRequest();
    objReq.open("GET", "http://localhost:3004", false);
    objReq.send(null);
	console.log("re"+objReq.getResponseHeader)
	*/
		// Get current cursor position
		//console.log(returnX())
		  var cursor_pos = $("#textarea2").prop('selectionStart');
		//  alert(cursor_pos);
		 
		

	var keynum;
  
	if(window.event) { // IE                  
	  keynum = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
	  keynum = e.which;
	}
	
console.log("="+e.key+"=");

//document.getElementById("textarea2").value =""+textArea+String.fromCharCode(keynum);
this.url="http://localhost:8081/" + "?key=" + e.key+"pos"+cursor_pos;

	load();

//load( );
window.setTimeout(() => {
	load2();
  }, 450);

console.log("sy"+symbole);

console.log("fin");

let textArea = document.getElementById('textarea1').value;
let textArea3 = document.getElementById('textarea3').value;

window.setTimeout(() => {
	console.log("timer2 "+$("#"+"textarea1").val().length);
	console.log(this.symbole);
	console.log("sl"+$("#"+"textarea1").val());
if(this.symbole==="Backspace"){


  $("#"+"textarea1").val( textArea.slice(0,this.pos-1) + textArea.slice(this.pos));
  $("#"+"textarea3").val( textArea3.slice(0,this.pos-1) + textArea3.slice(this.pos));
 //$('#text1').val(tx+""+textArea.slice(this.pos+1,$("#"+"textarea2").val().length));
}
else if(this.symbole==="Enter"){
	$('#textarea1').val(textArea.slice(0,this.pos)+"\n"+textArea.slice(this.pos));
	$('#textarea3').val(textArea3.slice(0,this.pos)+"\n"+textArea3.slice(this.pos));
}

else if(this.symbole===""){
	$('#textarea1').val(textArea.slice(0,this.pos)+" "+textArea.slice(this.pos));
	$('#textarea3').val(textArea3.slice(0,this.pos)+" "+textArea3.slice(this.pos));
}


else{
  $('#textarea1').val(textArea.slice(0,this.pos)+this.symbole+textArea.slice(this.pos));
  $('#textarea3').val(textArea3.slice(0,this.pos)+this.symbole+textArea3.slice(this.pos));

}
  },500);

  }

//textarea3




  function myKeyPress3(e){
	
	/*var objReq = new XMLHttpRequest();
    objReq.open("GET", "http://localhost:3004", false);
    objReq.send(null);
	console.log("re"+objReq.getResponseHeader)
	*/
		// Get current cursor position
		//console.log(returnX())
		  var cursor_pos = $("#textarea3").prop('selectionStart');
		//  alert(cursor_pos);
		 
		

	var keynum;
  
	if(window.event) { // IE                  
	  keynum = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
	  keynum = e.which;
	}
	
console.log("="+e.key+"=");

//document.getElementById("textarea2").value =""+textArea+String.fromCharCode(keynum);
this.url="http://localhost:8081/" + "?key=" + e.key+"pos"+cursor_pos;

	load();

//load( );
window.setTimeout(() => {
	load2();
  }, 450);

console.log("sy"+symbole);

console.log("fin");

let textArea = document.getElementById('textarea1').value;
let textArea3 = document.getElementById('textarea2').value;

window.setTimeout(() => {
	console.log("timer2 "+$("#"+"textarea1").val().length);
	console.log(this.symbole);
	console.log("sl"+$("#"+"textarea1").val());
if(this.symbole==="Backspace"){


  $("#"+"textarea1").val( textArea.slice(0,this.pos-1) + textArea.slice(this.pos));
  $("#"+"textarea2").val( textArea3.slice(0,this.pos-1) + textArea3.slice(this.pos));
 //$('#text1').val(tx+""+textArea.slice(this.pos+1,$("#"+"textarea2").val().length));
}
else if(this.symbole==="Enter"){
	$('#textarea1').val(textArea.slice(0,this.pos)+"\n"+textArea.slice(this.pos));
	$('#textarea2').val(textArea3.slice(0,this.pos)+"\n"+textArea3.slice(this.pos));
}

else if(this.symbole===""){
	$('#textarea1').val(textArea.slice(0,this.pos)+" "+textArea.slice(this.pos));
	$('#textarea2').val(textArea3.slice(0,this.pos)+" "+textArea3.slice(this.pos));
}


else{
  $('#textarea1').val(textArea.slice(0,this.pos)+this.symbole+textArea.slice(this.pos));
  $('#textarea2').val(textArea3.slice(0,this.pos)+this.symbole+textArea3.slice(this.pos));

}
  },500);

  }





function load( ) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response); // Par défault une DOMString
    }
  }

  xhr.open('GET', this.url, true);
  xhr.send('');
}
function load2( ) {
	
		
			var request = new XMLHttpRequest();
		
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					X=this.responseText;
					//console.log(X);
					jx=JSON.parse(X);
					//console.log(jx.key);
					this.key=jx.key;
					const words = jx.position.split('pos');
					pos=parseInt(words[1]);
					symbole=words[0];
					console.log("pos="+pos+" s="+symbole)

				

				}
			};
		
			request.open('GET', 'http://localhost:3000/c');
			request.send();
		
  }