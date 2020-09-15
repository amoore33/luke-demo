var boxEle = document.body.querySelector(".box");

var userName = window.prompt("What is your name?");

var x1 = 5;
var x2 = 3;

boxEle.innerHTML = x1 + x2;
boxEle.innerHTML += userName;
