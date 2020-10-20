// Variables
var myTimer = document.querySelector("#myTimer");
var timerCountdown = document.querySelector("#timer");

var count = 10

// Timer Function
myTimer.addEventListener("click", function () {
    function setTime() {
        // myTimer.textContent = "Restart"
        var timer = setInterval(function () {
            count--
            timerCountdown.textContent = `${count} Seconds Remaining`
            if (count === 0) {

                timerCountdown.textContent = "GAME OVER!!!"
                clearInterval(timer)
            }
        }, 1000)
    }

    setTime()

})




const questions = [
    {
        question: "What is the link you use in HTML for your Javascript File?",
        choices: ['<script src="./script.js"></script>', '<script My Javascript goes here ></script>', '<script id="./script.js"></script>', '<link rel="stylesheet" href="./assets/style.css">'],
        answer: 1
    },

    {
        title: "How do you get an element by it's ID?",
        choices: ['getElementbyID', 'getID', 'idGet', '#getElement'],
        answer: 'getElementbyID',

    },

    {
        title: "What charactes do you use to Comment out a line of code in Javascript?",
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

var currentQuestion = 0;
// var questionString = JSON.stringify(questions)
// var questionString = JSON.parse(questions)

var questionsSelector = document.querySelector("#questions");
var choicesSelector = document.querySelector("#choices");

myTimer.addEventListener("click", function () {

    questionsSelector.textContent = `New Question: ${questions[1]}`
    choicesSelector.textContent = `Choices: ${choices[1]}`
    // for (let i = 0; i < questions.length; i++) {
    //     var question = questions[i].question;
    //     document.textContent(questions);
    //     var options = questions[i].choices;

    // }

})
// TEST!

// TEST!


// Questions:
// 1. What is the link you use in HTML for your Javascript File
// <script src="./script.js"></script>
// <script My Javascript goes here ></script>
// <script id="./script.js"></script>
// <link rel="stylesheet" href="./assets/style.css">


// 2. How do you get an element by it's ID
//     getElementbyID
//     getID
//     idGet
//     #getElement

// 3. What charactes do you use to Comment out a line of code in Javascript
//     //
//     **
//     <!--
//     %%

// 4. What do you use in VS code to run Javascript in the terminal window?
//     node.js
//     runJavascript.js
//     app.js
//     console.log Javascript

// Bonus: What is your favorite programming Language:
//     Javascript
//     Python
//     CSS
//     HTML