//output
function outPut(){
	var number1=10;
	var number2=5;
	var result= number1+number2;
	document.getElementById('op').innerHTML=result;

}
//let keyword
function letKey(){
	let number1=10;
	 number2=5;
	 result= number1+number2;
	document.getElementById('le').innerHTML=result;
}
//js statement
function codeBlock(){
	document.getElementById('cb1').innerHTML="Hello";
	document.getElementById('cb2').innerHTML="How are you?";
}
//data type
function dType(){
	let number1=16;
	 	number2=5;
	 	name="Volvo";
	 	result= number1+number2+name;
	document.getElementById('dt').innerHTML=result;
}
//class name
function test(){
	document.getElementsByClassName('p')[1].innerHTML="Welcome";
}
//dbclick
function dblCli(){
	document.getElementById('dbl').innerHTML="Hello";
}
//onmouseover/onmouseout
function bigImg(x){
	x.style.height="80px";
	x.style.width="80px";
}
function norImg(x){
	x.style.height="32px";
	x.style.width="32px";
}
//onmousedown/mouseout
function msDown(x){
	x.style.color="blue";
}
function msUp(x){
	x.style.color="red";
}
//focus
function onFocus(x){
	x.style.background="pink";
}
//keyboard event
function keyDown(){
	document.getElementById('kd').innerHTML="Welcome";
}
//tagname
function test1(){
	document.getElementsByTagName('p')[0].innerHTML = "Hello World!";
}
//byname
function byName(){
	let element = document.getElementsByName("firstname");
	document.getElementById("bn1").innerHTML = element[0].tagName;
}
//query selector
function qSelect(){
	document.querySelector("p").style.backgroundColor="red";
}
//query
function test3(){
	document.querySelector(".se").style.backgroundColor = "red";
}
//queryall
function test4(){
	document.querySelectorAll(".se1").style.backgroundColor = "red";
}
//array
function arrayTest(){
	const cars=["Saab","Volvo","BMW"];
	document.getElementById('ar').innerHTML=cars;
}
//array declare
function arrTest(){
	const cars=[];
		  cars[0]="Saab";
		  cars[2]="Volvo";
		  cars[4]="BMW";
	document.getElementById('ary').innerHTML=cars;
}
//if
function iState(){
	if (new Date().getHours()<17){
		document.getElementById('ifs').innerHTML="Good Day!";
	}
	
}
//for loop
function fLoop(){
	const cars=["Saab","Volvo","BMW"];
	let text1="";
	for(let i=0; i<cars.length;i++){
		text1+= cars[i]+"<br>";
	}
	document.getElementById('fl').innerHTML=text1;
}
//return
function mFn(x1,x2){
	return x1*x2;
}
function valueReturn(){
	let result=mFn(4,3);
	document.getElementById('ref').innerHTML=result;
}
//string \
function stData(){
	let text2='It\'s alright';
	document.getElementById('es').innerHTML=text2;
}
//string \n
function strData(){
	let text3="Its alright.\nIts alright";
	document.getElementById('est').innerHTML=text3;
}
//string length
function strLenght(){
	let text4="Its alright.";
	document.getElementById('sl').innerHTML=text4.length;
}
//string slice
function strSlice(){
	let text5="Apple, Banana, Kiwi";
	let part=text5.slice(15,19);
	document.getElementById('sli').innerHTML=part;
}
//string slice
function striSlice(){
	let text6="Apple, Banana, Kiwi";
	let part1=text6.slice(-14);
	document.getElementById('slic').innerHTML=part1;
}
//replace
function striReplace() {
  let text6 = document.getElementById("re").innerHTML;
  document.getElementById("re").innerHTML =
  text6.replace("Microsoft","W3Schools");
}
//uppercase
function striUpper() {
  let text7 = document.getElementById("up").innerHTML;
  document.getElementById("up").innerHTML =
  text7.toUpperCase();
}
//concat
function striCon(){
	let text_1 = "Hello";
let text_2 = "World!";
let text_3 = text_1.concat(" ",text_2);
document.getElementById("con").innerHTML = text_3;
}
//number
function maxValue(){
	let x = Number.MAX_VALUE;
	document.getElementById("max").innerHTML = x;
}
//min number
function minValue(){
	let x = Number.MIN_VALUE;
	document.getElementById("min").innerHTML = x;
}
//exponential
function expValue(){
	let x = 9.656;
	document.getElementById("exp").innerHTML =
  				x.toExponential() +"<br>"+ 
  				x.toExponential(2) +"<br>"+ 
  				x.toExponential(5) +"<br>"+ 
  				x.toExponential(7);
}




