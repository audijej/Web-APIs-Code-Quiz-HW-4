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

let currentQuestion = 0;
let questionEl = document.getElementById("question");
let choicesEl = document.getElementById("multiple-choice-buttons");
let questionData =  quizQuestions[currentQuestion];
questionEl.textContent = questionData.question;
choicesEl.innerHTML = "";

function showQuestion () {
for (let choice of questionData.choices) {
    //let choiceBtn = document.createElement("button");
    let button = document.createElement("button")
    button.setAttribute("type", "button");
    button.setAttribute("class", "button");
    button.setAttribute("value", choice);
    button.textContent = choice;
    choicesEl.appendChild(button);

    button.addEventListener("click", function() {
        let userChoice = button.value;

        let responseChoice = document.getElementById("response");
        if (userChoice === quizQuestions[0].answer) {
            responseChoice.textContent = "Correct";
        }
        else {
            responseChoice.textContent = "Wrong";
        }
    });
}
};


// while(currentQuestion < quizQuestions.length) {
//     showQuestion(quizQuestions,currentQuestion);
// }




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

// let questionEl = document.createElement("div");
// let questionEl2 = document.createElement("div");
// let questionEl3 = document.createElement("div");
// let questionEl4 = document.createElement("div");
// let questionEl5 = document.createElement("div");
// let answerList = document.createElement("ul");
// let op1 = document.createElement("button");
// let op2 = document.createElement("button");
// let op3 = document.createElement("button");
// let op4 = document.createElement("button");

// let listItems = document.getElementById("button");

// questionEl.textContent = "Name a farm animal?";
// questionEl2.textContent = "What color is the sky?"
// questionEl3.textContent = "Which state is not on the west coast?"
// questionEl4.textContent = "What is the capital of the United States?"
// questionEl5.textContent = "What coloe are strawberries?"
// op1.textContent = "lion";
// op2.textContent = "tiger";
// op3.textContent = "cow";
// op4.textContent = "giraffe";

// body.appendChild(questionEl);
// body.appendChild(questionEl2);
// body.appendChild(questionEl3);
// body.appendChild(questionEl4);
// body.appendChild(questionEl5);
// body.appendChild(answerList);
// questionEl.appendChild(op1);
// questionEl.appendChild(op2);
// questionEl.appendChild(op3);
// questionEl.appendChild(op4);
// questionEl.appendChild(answerList);

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


//const questionElement = document.getElementById("question").innerHTML = questionairre;
// const answerElement = document.getElementById("multiple-choice-grid").innerText = answerList

// const questionElement = document.getElementById("question");
// count = 0;

// button.addEventListener("click", function() {
//     console.log(count);
//     console.log(quizQuestions[count]);
// if(count < quizQuestions.length-1){
//     count+=1
// }
// button.innerHTML = quizQuestions[count];
// });






