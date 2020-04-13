alert("This is a multiple choice and timed quiz. Good luck!")

const answer1 = document.querySelector("answerA");
const answer2 = document.querySelector("answerB");
const answer3 = document.querySelector("answerC");
const answer4 = document.querySelector("answerD");


function questions() {


    let farmAnimal = prompt("Name a farm animal?")



    let skyColor = prompt("What color is the sky?")



    let westCoast = prompt("Which state is not on the West Coast?")



    let stateCapital = prompt("What is the capital of the United States?")



    let straberryColor = prompt("What color are strawberries?")


};

let generateBtn = document.querySelector("#start-button");

generateBtn.addEventListener("click", questions);    

