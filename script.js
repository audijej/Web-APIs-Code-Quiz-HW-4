//alert("This is a multiple choice and timed quiz. Good luck!")

let timerSeconds = 60;
let secondsElapsed = 0;

let seconds = document.getElementById("countdown").textContent;

let countdownTimer = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdownTimer);
}, 1000);

const startButton = document.getElementById("start-button");

// startButton.addEventListener("click", startGame);

// function startGame() {
//     console.log("Let's get started")
// }

// let button = document.getElementById("button");
// button.addEventListener("click", changeGreen);

// function changeGreen(event) {
//     event.currentTarget.setAttribute(
//         "style",
//         "background-color: green"
//     );
    
// }


//////////////////////////////////////////////////////////////////////






let quizQuestions = [

    {
        question: "Name a farm animal?",
        choices: ["lion", "tiger", "cow", "giraffe"],
        answer: "cow",
        
    },

    {
        question: "What color is the sky?",
        choices: ["red", "green", "blue", "purple"],
        answer: "blue"
    },

    {
        question: "Which state is NOT on the West Coast?",
        choices: ["Washington", "California", "New York", "Oregon"],
        answer: "New York"

    },

    {
        question: "What is the capital of the United States?",
        choices: ["Montana", "Nevada", "Washington DC", "Arizona"],
        answer: "Washington DC"

    },

    {
        question: "What color are strawberries?",
        choices: ["Blue", "Red", "Purple", "Green"],
        answer: "Red"
    },
];



function showQuestion (){

    let currentQuestion = 0;
    let questionDiv = document.getElementById("question");
    let choicesEl = document.getElementById("multiple-choice-buttons");
    let questionData =  quizQuestions[currentQuestion];
    questionDiv.textContent = questionData.question;
    choicesEl.innerHTML = "";

    

for (let choice of questionData.choices) {
    //let choiceBtn = document.createElement("button");
    let button = document.createElement("button")
    button.setAttribute("type", "button");
    button.setAttribute("class", "button choice-button");
    button.setAttribute("value", choice);
    button.textContent = choice;
    choicesEl.appendChild(button);

    button.addEventListener("click", function() {
        let userChoice = button.value;
        let counter = document.querySelector("#Highscore-tracker");
        let score = localStorage.getItem("score");
        counter.textContent = score;
        let responseChoice = document.getElementById("response");
        if (userChoice === quizQuestions[currentQuestion].answer) {
            responseChoice.textContent = "Correct";
            score++;
            counter.textContent = score;
            localStorage.setItem("score", score);

        }
        else {
            responseChoice.textContent = "Wrong";
            score--;
            counter.textContent = score;
            localStorage.setItem("score", score);

        }

        if(quizQuestions.length) {
            showQuestion(quizQuestions.shift());
        }

        else {
            alert("all done");
        }
        
    });

}
console.log(score);


};



showQuestion();


function setNextQuestion() {
    hola(questionData, button);
}


// function showQuestion() {
//     let hola = "";
//     let konichiwa = "";
//     for (i=0;i<quizQuestions.length; i++) { 
//         hola += quizQuestions[i].question;
//         konichiwa += quizQuestions[i].answers;
//         console.log(quizQuestions[i].question);
//         console.log(quizQuestions[i].answers);
//     }


    

//     document.getElementById("question").innerHTML = hola;
//     document.getElementById("multiple-choice-buttons").innerHTML = konichiwa;
// }



//     //document.getElementById("question").innerHTML = hola;
//     //document.getElementById("multiple-choice-buttons").innerHTML = konichiwa;




// showQuestion();


// let body = document.body;

// let questionDiv = document.createElement("div");
// let questionDiv2 = document.createElement("div");
// let questionDiv3 = document.createElement("div");
// let questionDiv4 = document.createElement("div");
// let questionDiv5 = document.createElement("div");
// let answerList = document.createElement("ul");
// let op1 = document.createElement("button");
// let op2 = document.createElement("button");
// let op3 = document.createElement("button");
// let op4 = document.createElement("button");

// let listItems = document.getElementById("button");

// questionDiv.textContent = "Name a farm animal?";
// questionDiv2.textContent = "What color is the sky?"
// questionDiv3.textContent = "Which state is not on the west coast?"
// questionDiv4.textContent = "What is the capital of the United States?"
// questionDiv5.textContent = "What coloe are strawberries?"
// op1.textContent = "lion";
// op2.textContent = "tiger";
// op3.textContent = "cow";
// op4.textContent = "giraffe";

// body.appendChild(questionDiv);
// body.appendChild(questionDiv2);
// body.appendChild(questionDiv3);
// body.appendChild(questionDiv4);
// body.appendChild(questionDiv5);
// body.appendChild(answerList);
// questionDiv.appendChild(op1);
// questionDiv.appendChild(op2);
// questionDiv.appendChild(op3);
// questionDiv.appendChild(op4);
// questionDiv.appendChild(answerList);

// let firstQuestion = document.getElementById("question");
// firstQuestion.innerHTML = "Name a farm animal?"

// let answerButton = document.getElementById("op1");
// answerButton.innerHTML = "lion";

// let answerButton2 = document.getElementById("op2");
// answerButton2.innerHTML = "tiger";

// let answerButton3 = document.getElementById("op3");
// answerButton3.innerHTML = "cow";

// let answerButton4 = document.getElementById("op4");
// answerButton4.innerHTML = "giraffe";
// //window.onload=app.load();

// let selectAnswer = document.getElementById("multiple-choice-buttons");
// let answerResponse = document.getElementById("response");

// selectAnswer.addEventListener("click", function(event) {
// event.preventDefault();
// if(firstQuestion === "op3") {
//     let rightOrWrong = document.createElement("div");
//     rightOrWrong.document.innerHTML = "You got it right!";
//     answerResponse.appendChild(rightOrWrong);
// }

// });



























// let questionairre = "";
// let answerList = "";

// function showQuestion() {
//     for (let i = 0; i < quizQuestions.length; i++) {
//         console.log(quizQuestions[0].question);
//         questionairre += quizQuestions[i].question;
//     }
//     console.log(questionairre);
//     return questionairre;
// }

// function showAnswer() {
//     for (let i = 0; i < quizQuestions.length; i++) {
//         console.log(quizQuestions[i].answers);
//         answerList += quizQuestions[i].answers;
//     }
//     return answerList;
// }


// showQuestion();


//const questionDivement = document.getElementById("question").innerHTML = questionairre;
// const answerElement = document.getElementById("multiple-choice-grid").innerText = answerList

// const questionDivement = document.getElementById("question");
// count = 0;

// button.addEventListener("click", function() {
//     console.log(count);
//     console.log(quizQuestions[count]);
// if(count < quizQuestions.length-1){
//     count+=1
// }
// button.innerHTML = quizQuestions[count];
// });






