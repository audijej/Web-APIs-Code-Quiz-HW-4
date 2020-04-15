//alert("This is a multiple choice and timed quiz. Good luck!")


const quizQuestions = [

    {
        question: "Name a farm animal??????",
        answers: {
            a: 'lion',
            b: 'tiger',
            c: 'cow',
            d: 'girrafe',
    },
        correctAnswer: "c"

    },

    {
        question: "What color is the sky?",
        answers: {
            a: 'red',
            b: 'green',
            c: 'blue',
            d: 'purple',
        },

        correctAnswer: "c"
    
        },

    {
        question: "Which state is NOT on the West Coast?",
        answers: {
            a: 'Washington',
            b: 'California',
            c: 'New York',
            d: 'Oregon',
        },

        correctAnswer: "c"
    
    },

    {
      question: "What is the capital of the United States?",
        answers: {
            a: 'Montana',
            b: 'Nevada',
            c: 'Washington DC',
            d: 'Arizona',
        },

        correctAnswer: "c"
    
        }, 
    
        {
        question: "What color are strawberries?",
        answers: {
            a: 'Blue',
            b: 'Yellow',
            c: 'Red',
            d: 'Green',
        },

       correctAnswer: "a"
    },
];


let timerSeconds = 60;
let secondsElapsed = 0;

let seconds = document.getElementById("countdown").textContent;
let questionElement = document.getElementById("question");
let answerElement = document.getElementById("multiple-choice-buttons");

let countdownTimer = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdownTimer);
}, 1000);

const startButton = document.getElementById("start-button");

// startButton.addEventListener("click", startGame);

// function startGame() {
//     console.log("Let's get started")
// }

let button = document.querySelector("button");

function changeGreen(event) {
    event.currentTarget.setAttribute(
      "style",
      "background-color: green"
    );
  }
  
  button.addEventListener("click", changeGreen);

  function showQuestion() {
    questionElement.innerHTML = quizQuestions
  }