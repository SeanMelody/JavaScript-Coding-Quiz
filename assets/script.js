// Variables
var myTimer = document.querySelector("#myTimer");
var timerCountdown = document.querySelector("#timer");
var results = document.querySelector("#results");
var resultsInput = document.querySelector("#results-input");
var highScoresList = document.querySelector(".highscores-list");

// var winner = window.localStorage

// Counter Start Time
var count = 100

// Timer Function starts when user hits Start Button
myTimer.addEventListener("click", function () {
    function setTime() {
        // Changes the text of Button after clicked
        myTimer.textContent = "Refresh the Page to Restart Quiz"
        // Timer Counts Down from 100 seconds
        var timer = setInterval(function () {
            count--
            timerCountdown.textContent = `${count} Seconds Remaining`
            if (count === 0) {

                timerCountdown.textContent = "GAME OVER!!!"
                clearInterval(count)
            }
        }, 1000)
    }

    setTime()

})


// Questions Array Yeay!
var questions = [
    {
        title: "How do you get an element by it's ID?",
        choices: ['getElementbyID', 'getID', 'idGet', '#getElement'],
        answer: 'getElementbyID',

    },

    {
        title: "What is the link you use in HTML for your Javascript File?",
        choices: ['<script src="./script.js"></script>', '<script My Javascript goes here ></script>', '<script id="./script.js"></script>', '<link rel="stylesheet" href="./assets/style.css">'],
        answer: '<script src="./script.js"></script>'
    },
    {
        title: "What characters do you use to Comment out a line of code in Javascript?",
        choices: ['//', '**', '<!--', '&&'],
        answer: '//',
    },

    {
        title: "What do you use in VS code to run Javascript in the terminal window?",
        choices: ['node.js', 'runJavascript', 'jsapp.js', 'console.log Javascript'],
        answer: 'node.js',
    },

    {
        title: "What is your favorite programming language?",
        choices: ['Javascript', 'Not Javascript', 'Javascript', 'Javascript'],
        answer: 'Javascript',
    },
    // Final Array to indicate end of list/Quiz
    {
        title: "End of Quiz!",
        choices: ['Add your score!'],
        answer: 'Add your score!',
    },
];

// Set Question Index to 0
var currentQuestionIndex = 0;
// Set Current Choice to 0
var currentChoices = 0;

// Function to get and print a question to page
function getQuestion() {
    // Activated with Start Button Click
    myTimer.addEventListener("click", function () {
        var currentQuestion = questions[currentQuestionIndex];
        var titleElement = document.querySelector("#questions");
        // Print the Question
        titleElement.textContent = currentQuestion.title;

        var currentChoices = document.querySelector("#choices");
        currentChoices.textContent = currentQuestion.choices;

        // Empty Out the Choices
        currentChoices.innerHTML = "";

        // Loop Through the Choices
        currentQuestion.choices.forEach(function (choice, i) {
            var choicesButtons = document.createElement("button");
            choicesButtons.setAttribute("class", "choice");
            choicesButtons.setAttribute("value", choice)
            choicesButtons.textContent = choice;


            // Make the choices Buttons!
            choicesButtons.onclick = questionGuess;

            currentChoices.appendChild(choicesButtons);


        })



    })

    function questionGuess() {

        // check if user guessed wrong
        if (this.value !== questions[currentQuestionIndex].answer) {
            // penalize time 10 seconds
            count -= 10;
            // Make sure there is time to penalzie
            if (count < 0) {
                count = 0;
            }
            // Print Result of Guess to Page
            timerCountdown.textContent = count;
            results.textContent = "Wrong!";

            // IF END OF QUESTIONS
            if (currentQuestionIndex === 5) {
                console.log(count)



            } else {

                // Loop to next Question
                currentQuestionIndex++;
                var currentQuestion = questions[currentQuestionIndex];
                var titleElement = document.querySelector("#questions");
                // Print New Question
                titleElement.textContent = currentQuestion.title;

                var currentChoices = document.querySelector("#choices");
                // Print New Question
                currentChoices.textContent = currentQuestion.choices;

                // Clear out old Choices
                currentChoices.innerHTML = "";

                // Make choices Buttons
                currentQuestion.choices.forEach(function (choice, i) {
                    var choicesButtons = document.createElement("button");
                    choicesButtons.setAttribute("class", "choice");
                    choicesButtons.setAttribute("value", choice)
                    choicesButtons.textContent = choice;

                    choicesButtons.onclick = questionGuess;

                    currentChoices.appendChild(choicesButtons);


                })
            }

        } else {
            // Print Result of Guess to Page
            results.textContent = "Correct!";

            // IF END OF QUESTIONS
            if (currentQuestionIndex === 5) {
                console.log(count)

                userName = prompt("What's your name?")

                results.textContent = `${userName} Your score is: ${count}`;





                window.localStorage.setItem('user', count)
                // var userInitials = window.localStorage.getItem(value)
                highScoresList.textContent = `${userName} Your score is: ${count}`;



            } else {
                currentQuestionIndex++;
                var currentQuestion = questions[currentQuestionIndex];
                var titleElement = document.querySelector("#questions");
                titleElement.textContent = currentQuestion.title;

                var currentChoices = document.querySelector("#choices");
                currentChoices.textContent = currentQuestion.choices;


                currentChoices.innerHTML = "";

                currentQuestion.choices.forEach(function (choice, i) {
                    var choicesButtons = document.createElement("button");
                    choicesButtons.setAttribute("class", "choice");
                    choicesButtons.setAttribute("value", choice)
                    choicesButtons.textContent = choice;



                    choicesButtons.onclick = questionGuess;

                    currentChoices.appendChild(choicesButtons);


                })
            }

        }

    }
}
getQuestion()


function quizEnd() {
    if (currentQuestionIndex === questions.length) {
        console.log("END")
    }
}


// STILL NEED

// High Score Saving and Results Printed
userGuess = 0
window.localStorage.setItem("user", userGuess)
var user = window.localStorage.getItem("user")


    // TEST!

    // TEST!