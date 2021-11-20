


//Global Scope Variable example:
  var X = 25;
  function Add_numbers_1() {
      document.write(20 + X + "<br>");
  }
  function Add_numbers_2() {
      document.write(X + 100);
  }
  Add_numbers_1();
  Add_numbers_2();

  //Local Variable Example:
  function Add_numbers_1() {
      var X = 17;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();



//Using Console log method to detect errors:
function Add_numbers_1() {
    var X = 15;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();


//IF Statement:
function get_Number() {
    if (165 < 245) {
        document.write("True.")
    }
}


//IF Statement:
function get_Hours(){
    if (new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}



//ELSE Statements:
function Age_Function() {
    Age = document.getElementById("Age").Value;
    if (Age >= 18) {
        Vote = "You are NOT old enough to vote!";
    }
    else {
        Vote = "You ARE old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}



//ELSE IF Statements:
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time < 12 == Time > 0) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}