

//Displaying code using CONCAT()Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("CONCAT_1").innerHTML = whole_sentence;
}


//Slice Method extracting a section in Sentence
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}


//Using toUpperCase method to display "hello world"
function Upper_case() {
    var text = "hello world";
    document.getElementById("hello world").innerHTML = text.toUpperCase();
}

//Using search() method example
    let text = "Mr. Blue has a blue house"
    let position = text.search("Blue");
    document.getElementById("demo").innerHTML = position;


//Displaying toString() method as example
    function string_Method() {
        var X =487;
        document.getElementById("Numbers_to_string").innerHTML = X.toString();
    }


//TOPRECISION() METHOD
    function precision_Method() {
        var X = 12938.3012987376112;
        document.getElementById("Precision").innerHTML = X.toPrecision(10);
    }


//Using toFixed() method
    let num = 5.56789;
    let n = num.toFixed(2);
    document.getElementById("demoFixed").innerHTML = n;


//Using valueOf() method
    let word = "Bonjour";
    let result = text.valueOf();
    document.getElementById("demoValue").innerHTML = result;