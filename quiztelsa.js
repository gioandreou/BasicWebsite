// json array movement variable
var i = 0;
var correctCount = 0 ;
index = shuffle(jsonData);
//initialize the first question
generate(0);
// generate from json array data with index

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
}
function myFunction() {
    alert("Right answer");
}
function myWrong() {
    alert("Wrong answer");
}

function checkAnswer() {
    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
       correctCount++;
       myFunction();
    }
    else if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
        correctCount++;
        myFunction();
    }
    else if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;
        myFunction();
    }
    else {myWrong();}
    // increment i for next question
    i++;
    if(jsonData.length-1 < i){
       // document.write("<body>");
      	document.getElementById("demo").innerHTML = correctCount;
        //document.write("Your score is : "+correctCount );
       // document.write("</body>");
    }
    // callback to generate
    generate(i);
}
