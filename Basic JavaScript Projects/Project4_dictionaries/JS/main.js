
//Adds Keys and key values to each in dictionary below:
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //Edit to delete (Animal.Sound)
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //adds id to call
}