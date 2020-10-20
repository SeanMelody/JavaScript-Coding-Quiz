// Variables
var myTimer = document.querySelector("#myTimer");
var timerCountdown = document.querySelector("#timer");

var count = 100

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
        title: "How do you get an element by it's ID?",
        choices: ['getElementbyID', 'getID', 'idGet', '#getElement'],
        answer: 'getElementbyID',

    },

    {
        title: "What is the link you use in HTML for your Javascript File?",
        choices: ['<script src="./script.js"></script>', '<script My Javascript goes here ></script>', '<script id="./script.js"></script>', '<link rel="stylesheet" href="./assets/style.css">'],
        answer: 1
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

var currentQuestionIndex = 0;
var currentChoices = 0;
// var questionString = JSON.stringify(questions)
// var questionString = JSON.parse(questions)

// var questionsSelector = document.querySelector("#questions");
// var choicesSelector = document.querySelector("#choices");

// var currentQuestion = questions[currentQuestionIndex];

myTimer.addEventListener("click", function () {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#questions");
    titleElement.textContent = currentQuestion.title;

    var currentChoices = document.querySelector("#choices");
    currentChoices.textContent = currentQuestion.choices;


    // questionsSelector.textContent = `New Question: ${questions[1]}`
    // choicesSelector.textContent = `Choices: ${choices[1]}`

    // for (let i = 0; i < questions.length; i++) {
    //     var question = questions[i].question;
    //     document.textContent(questions);
    //     var options = questions[i].choices;

    // }
    // var currentChoices = document.querySelector("#choices");

    // TEST!
    currentChoices.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choicesButtons = document.createElement("button");
        choicesButtons.setAttribute("class", "choice");
        choicesButtons.setAttribute("value", choice)
        choicesButtons.textContent = choice;
        // choicesButtons.textContent = choice;

        console.log(choicesButtons)

        // choicesButtons.onClick = questionClick;

        currentChoices.appendChild(choicesButtons);


    })
})
