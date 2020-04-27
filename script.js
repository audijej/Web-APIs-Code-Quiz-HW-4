
// Countdown timer

let timerSeconds = 60;
let secondsElapsed = 0;
let score = 0;


let seconds = document.getElementById("countdown").textContent;

let countdownTimer = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdownTimer);
}, 1000);

const startButton = document.getElementById("start-button");


//Array of objects that pertains to questions and answers
let quizQuestions = [

    {
        question: "Name a farm animal?",
        choices: ["lion", "tiger", "cow", "giraffe"],
        answer: "cow",

    },

    {
        question: "What color is the sky?",
        choices: ["blue", "green", "red", "purple"],
        answer: "blue"
    },

    {
        question: "Which state is NOT on the West Coast?",
        choices: ["Washington", "California", "New York", "Oregon"],
        answer: "New York"

    },

    {
        question: "What is the capital of the United States?",
        choices: ["Montana", "Washington DC", "Nevada", "Arizona"],
        answer: "Washington DC"

    },

    {
        question: "What color are strawberries?",
        choices: ["Blue", "Red", "Purple", "Green"],
        answer: "Red"
    },
];



//function that runs for loop to run the object array and click listener
function showQuestion() {

    let currentQuestion = 0;
    let questionDiv = document.getElementById("question");
    let choicesEl = document.getElementById("multiple-choice-buttons");
    let questionData = quizQuestions[currentQuestion];
    questionDiv.textContent = questionData.question;
    choicesEl.innerHTML = "";



    for (let choice of questionData.choices) {
        let button = document.createElement("button")
        button.setAttribute("type", "button");
        button.setAttribute("class", "button choice-button");
        button.setAttribute("value", choice);
        button.textContent = choice;
        choicesEl.appendChild(button);


        button.addEventListener("click", function () {
            let userChoice = button.value;
            let counter = document.getElementById("Highscore-tracker");
            let responseChoice = document.getElementById("response");
            if (userChoice === quizQuestions[currentQuestion].answer) {
                responseChoice.textContent = "Correct";
                score = score + 1;
                counter.innerHTML = "Score: " + score;

            }
            else {
                responseChoice.textContent = "Wrong";
                seconds = seconds - 20
                score = score - 1;
                counter.innerHTML = "Score: " + score;
            }

            if (quizQuestions.length - 1) {
                showQuestion(quizQuestions.shift());
            }

            else {
                alert("Congratulations. You've completed the quiz! Please see your score to the left.");
            }

        });

    }

};



showQuestion();


