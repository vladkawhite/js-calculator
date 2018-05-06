let firstnumber,

 secondnumber,

 result,

 operation;

function numone(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "1";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "1";

}

}

function numtwo(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "2";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "2";

}

}

function numthree(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "3";

}

else

{

document.panelform.panels.value = document.panelform.panels.value + "3";

}

}

function numfour(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "4";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "4";

}

}

function numfive(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "5";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "5";

}

}

function numsix(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "6";

}

else

{

document.panelform.panels.value = document.panelform.panels.value + "6";

}

}

function numseven(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "7";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "7";

}

}

function numeight(){

if (document.panelform.panels.value == "0"){

document.panelform.panels.value = "8";

}

else if (document.panelform.panels.value == result)

{

document.panelform.panels.value = "8";

}

else //if(document.panelform.panels.value != "0")

{

document.panelform.panels.value = document.panelform.panels.value + "8";

}

}

function numnine(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

document.panelform.panels.value = "9";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "9";

}

}

function numzero(){

if (document.panelform.panels.value == "0"){

document.panelform.panels.value = "0";

}

else if (document.panelform.panels.value == result)

{

document.panelform.panels.value = "0";

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "0";

}

}

function numdobuzero(){

if (document.panelform.panels.value == "0" || document.panelform.panels.value == result){

return;

}

else 

{

document.panelform.panels.value = document.panelform.panels.value + "00";

}

}

function clr(){

document.panelform.panels.value = "0";

document.panelform.panelsu.value = "";

return;

}

function operationplus(){

operation = "+";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

document.panelform.panelsu.value = firstnumber + operation;


}

function operationmult(){

operation = "*";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

document.panelform.panelsu.value = firstnumber + operation;

}

function operationminus(){

operation = "-";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

document.panelform.panelsu.value = firstnumber + operation;

}

function operationdivid(){

operation = "/";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

document.panelform.panelsu.value = firstnumber + operation;

}

function operationperc(){

operation = "%";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

document.panelform.panelsu.value = firstnumber + operation;

}

function equalsto(){

secondnumber = parseInt(document.panelform.panels.value);

if (operation == "+")

{

result = firstnumber + secondnumber;

}

else if (operation == "*"){

result = firstnumber * secondnumber;

}

else if (operation == "-"){

result = firstnumber - secondnumber;

}

else if (operation == "/"){

result = firstnumber / secondnumber;

}

else if (operation == "%"){

if (document.panelform.panels.value == "0"){

result = firstnumber / 100;

document.panelform.panelsu.value = firstnumber + operation + "100";

}

else if (document.panelform.panels.value != "0") {

result = firstnumber / secondnumber * 100;

document.panelform.panelsu.value = firstnumber + operation + secondnumber + "*100 = " + result;

}

}

else if (operation == "^"){

for (let i = 0; i < secondnumber; i++){

result = firstnumber * i;

}

}

document.panelform.panels.value ="";

document.panelform.panels.value = result.toString();

document.panelform.panelsu.value = firstnumber + operation + secondnumber + " = " + result.toString();

return;

}

function sqrots(){

firstnumber = document.panelform.panels.value;

result = Math.sqrt(parseInt(document.panelform.panels.value));

document.panelform.panels.value = result;

document.panelform.panelsu.value = "sqrt(" + firstnumber + ") = " + result;

}

function operationraistop(){

operation = "^";

firstnumber = parseInt(document.panelform.panels.value);

document.panelform.panels.value = "0";

}