

document.write(typeof "5")  //operator output number given

document.write("10" + 5);   //Coercion operation

document.getElementById("Test").innerHTML = isNaN('this is a string');  //defines "not a number" operation

document.getElementById("Test").innerHTML = isNaN('007');   //defines whether is number

document.getElementById("infinity").innerHTML = (3E310);    //displaying infinity number

document.getElementById("negative_infinity").innerHTML = (-3E310);  //displaying negative infinity number

document.write(100 > 20);   //Boolean value of true

document.write(100 < 20);   //Boolean value of false

console.log(8 + 9);     //console method to determine any bug(s)

console.log(8 > 9);     //console method to determine any bug(s)

document.write(248 == 248);     //Checks right and left side of data for equality

document.write(51 == 311);      //Checks right and left side of data for equality

X = 25;
Y = 25;
document.write(X === Y);        //Checks value and type of both pieces of data

A = "Magnus";
B = "Magnus";
document.write(A === B);        //Checks value and type of both pieces of data

X = 200;
Y = "148";
document.write(X === Y);        //Checks value and type of both pieces of data


X = "250";
Y = 250;
document.write(X === Y);        //Checks value and type of both pieces of data


X = "100";
Y = "200";
document.write(X === Y);        //Checks value and type of both pieces of data


X = 48;
Y = "48";
document.write(A === B);        //Checks value and type of both pieces of data




document.write(5 > 2 && 10 > 4);        //Boolean Logical Operator(AND) between values and variables

document.write(5> 10 && 10 > 4);        //Boolean Logical Operator(AND) between values and variables


document.write(5 > 10 || 10 > 4);       //Boolean Logical Operator(OR) between values and variables

document.write(5 > 10 || 10 > 20);      //Boolean Logical Operator(OR) between values and variables


document.write(82 > 44 || 24 > 16);     //Boolean Logical Operator(OR) between values and variables

document.write(2500 > 5000 || 4 > 10);      //Boolean Logical Operator(OR) between values and variables


function not_Function() {
    document.getElementById("true").innerHTML = !(40 > 30);     //Boolean Logical Operator(NOT) between values and variables
}

function nd_Function() {
    document.getElementById("Not").innerHTML = !(50 > 105);     //Boolean Logical Operator(NOT) between values and variables
}

document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");




