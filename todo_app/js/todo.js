

var obj = { "name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

document.getElementById("demo2").innerHTML = obj.firstName;


/*set the data as a key/value pair to be saved locally in your browser*/
localStorage.setItem("Name", "Boots");
/*then use the key "Name" to return its value "Boots"*/
document.getElementById("myCat").innerHTML = localStorage.getItem("Name");

