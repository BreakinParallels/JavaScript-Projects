


//Adds variables and id to be displayed for addition
function addition() {
    var addition = 100 + 100;
    document.getElementById("Add").innerHTML = "100 + 100 = " + addition;
}

//Adds variables and id to be displayed for subtraction 
function subtraction() {
    var Subtraction = 50 - 25;
    document.getElementById("Subtract").innerHTML = "50 - 25 = " + Subtraction;
}

//Adds variables and id to be displayed for multiplication
function multiplication() {
    var Multiplication = 200 * 10;
    document.getElementById("Multiply").innerHTML = " 200 x 10 = " + Multiplication;
}


//Adds variables and id to be displayed for division
function division() {
    var Division = 60 / 10;
    document.getElementById("Divide").innerHTML = " 60 / 10 = " + Division;
}


//Adds variables and id to be displayed for multiple math problem
function more_Math() {
    var simple_Math = (3 + 3) * 20 / 4 - 2;
    document.getElementById("Math").innerHTML = "3 plus 3, multiplied by 20, divided by 4 and then subtracted by 2 equals " + simple_Math;
}


//Adds variables and id to be displayed for Remainder of division problem
function modulus_Operator() {
    var simple_Math = 30 % 7;
    document.getElementById("more_Math").innerHTML = "When you divide 30 by 7 you have a remainder of: " + simple_Math;
}


//Adds variable and id to be displayed to return negative form of variable 
function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}


//Adds variable and id to increment, displays 
var X = 45;
X++;
document.write(X);


//Adds variable and id to decrement, displays
var Y = 8.15;
Y--;
document.write(Y);


//Generates random number in window
window.alert(Math.random());

//Generates random number x 50 in window
window.alert(Math.random() * 50);


// Adds id and displays rounded number given below (4.6)
document.getElementById("demo").innerHTML = Math.round(4.6);