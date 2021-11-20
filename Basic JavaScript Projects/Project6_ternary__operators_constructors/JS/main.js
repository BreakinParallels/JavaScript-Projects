

//Ternary Operator Function(Voter Age Check)
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Vote < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Utilizing Keywords to create new objects and Values
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}



// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
  

//Displaying Results of a constructor function with HTML/element
function OOP() {
    document.getElementById("Father").innerHTML = "My father's name is " + myFather.firstName;
}


  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 

  //Nested function 
  function count_Function() {
      document.getElementById("Nested_Function").innerHTML = Count();
      function Count() {
          var Starting_point = 57;
          function Plus_one() {Starting_point += 1;}
          Plus_one();
          return Starting_point;
      }
  }