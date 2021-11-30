

//Loop------------------------
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


//Setting String Length Property----------
let text = "Hello World!";
let length = text.length;
document.getElementById("demo").innerHTML = length;



//Instrument Loop-------------------
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


//Array and Objects example-------------------------
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}


//Constant designation example-------------------
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


//Example of Let function-------------------
function let_example() {
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
}


//Return Statement------------------
function myFunction() {
    return Math.PI;
}
document.getElementById("demo2").innerHTML = myFunction();



//Object Assignment and use of "let" keyword demo-----
let car = {
    make: "Audi ",
    model: "R8 ",
    year: "2021 ",
    color: "Gun-Metal Gray ",
    description : function() {
        return "The car is a " + this.year + this.color  + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();



//Utilizing Break function---------

let digits = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    digits += "The number is " + i + "<br>";
}
document.getElementById("example_1").innerHTML = digits;











