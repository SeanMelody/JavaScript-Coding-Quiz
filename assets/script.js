// Variables
var myTimer = document.querySelector("#myTimer");
var timerCountdown = document.querySelector("#timer");
var results = document.querySelector("#results");

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


// Questions Array!
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
    }
];

// Set Question Index to 0
var currentQuestionIndex = 0;
// Set current Choice to 0
var currentChoices = 0;

// Function to get and print a question to page
function getQuestion() {
    // Activated with Start Button Click
    myTimer.addEventListener("click", function () {
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



    })
    // currentQuestionIndex++;

    // Checking User Guess and penalizing if guess wrong
    function questionGuess() {
        if (currentQuestionIndex === 6) {
            console.log(count)
        } else {
            console.log("Next Question")

            // check if user guessed wrong
            if (this.value !== questions[currentQuestionIndex].answer) {
                // penalize time
                count -= 10;

                if (count < 0) {
                    count = 0;
                }
                // Print Result of Guess to Page
                timerCountdown.textContent = count;
                results.textContent = "Wrong!";
                // if (currentQuestionIndex == 6) {
                //     console.log(count)
                // } else {
                //     console.log("Next Question")

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
                // }
            } else {
                // Print Result of Guess to Page
                results.textContent = "Correct!";
                // if (currentQuestionIndex == 6) {
                //     console.log(count)
                // } else {
                //     console.log("Next Question")


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
                // getQuestion()
            }
        }
        // if (currentQuestionIndex === questions.length) {
        //     console.log("quiz Over")
        //     // getQuestion();
        // } else {
        //     console.log("nextQestion")
        //     // QUIZ END
        // }



        // currentQuestionIndex++;  


    }


}
getQuestion()
// if (currentQuestionIndex === questions.length) {
//     console.log("END")
//     getQuestion();
// } else {
//     console.log("quiz Over")
//     getQuestion();
//     // quizEnd();
// }

function quizEnd() {
    if (currentQuestionIndex === questions.length) {
        console.log("END")
    }
}
// userGuess = 0
// window.localStorage.setItem("user", userGuess)
// var user = window.localStorage.getItem("user")




// STILL NEED

// High Score Saving and Results Printed
userGuess = 0
window.localStorage.setItem("user", userGuess)
var user = window.localStorage.getItem("user")


    // TEST!

    // TEST!