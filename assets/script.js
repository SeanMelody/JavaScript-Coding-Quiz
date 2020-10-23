// Variables are here
var myTimer = document.querySelector("#myTimer");
var timerCountdown = document.querySelector("#timer");
var results = document.querySelector("#results");
var resultsInput = document.querySelector("#results-input");
var highScoresList = document.querySelector(".highscores-list");


// Counter Start Time
var count = 100

// Timer Function starts when user hits Start Button
function setTime() {
    // Changes the text of Button after clicked
    myTimer.textContent = "Refresh the Page to Restart Quiz"
    // Timer Counts Down from 100 seconds

    // Countdown of timer and if it hits 0, game over!
    setInterval(function () {
        if (count !== 0) {
            count--
            timerCountdown.textContent = `${count} Seconds Remaining`
        } else if
            (count === 0) {

            timerCountdown.textContent = "GAME OVER!!!"
            clearInterval(count)
        }
        // Timer goes by 1000 milliseconds (AKA 1 second)
    }, 1000)

}


// Timer Function starts when user hits Start Button
myTimer.addEventListener("click", setTime)


// Questions Array Yeay!
var questions = [
    {
        title: "How do you get an element by it's ID?",
        choices: ['idGet', 'getID', 'getElementbyID', '#getElement'],
        answer: 'getElementbyID',

    },

    {
        title: "What is the link you use in HTML for your JavaScript File?",
        choices: ['<script My JavaScript goes here ></script>', '<script src="./script.js"></script>', '<script id="./script.js"></script>', '<link rel="stylesheet" href="./assets/style.css">'],
        answer: '<script src="./script.js"></script>'
    },
    {
        title: "What characters do you use to Comment out a line of code in JavaScript?",
        choices: ['//', '**', '<!--', '&&'],
        answer: '//',
    },

    {
        title: "What do you use in VS code to run JavaScript in the terminal window?",
        choices: ['console.log JavaScript', 'runJavaScript', 'jsapp.js', 'node'],
        answer: 'node',
    },

    {
        title: "What is your favorite programming language?",
        choices: ['JavaScript', 'JavaScript', 'JavaScript', 'JavaScript'],
        answer: 'JavaScript',
    },
    // Final Array to indicate end of list/Quiz and do the prompt for name!
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
        // Access the location of ID Questions
        var titleElement = document.querySelector("#questions");
        // Print the Question
        titleElement.textContent = currentQuestion.title;
        // Access the location of ID Choices
        var currentChoices = document.querySelector("#choices");
        // Print the choices
        currentChoices.textContent = currentQuestion.choices;

        // Empty Out the Choices
        currentChoices.innerHTML = "";

        // Loop Through the Choices
        currentQuestion.choices.forEach(function (choice, i) {
            // Make a button for each choice
            var choicesButtons = document.createElement("button");
            // Set the attribute of each choice
            choicesButtons.setAttribute("class", "choice");
            // Set the value of each choice
            choicesButtons.setAttribute("value", choice)
            // Print the choices in the buttons
            choicesButtons.textContent = choice;

            // Make the choices into Buttons!
            choicesButtons.onclick = questionGuess;

            // Append the choice buttons
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
            // Replace the countdown count to new number
            timerCountdown.textContent = count;

            // Print Result of Guess to Page
            results.textContent = "Wrong!";

            // IF END OF QUESTIONS
            if (currentQuestionIndex === 5) {

                // Get user Name via a prompt
                userNameInput = prompt("What's your name?");

                // Check to see if there is a list already in local Storage, or make a new list
                var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

                // format new score object for current user, and score
                var newScore = {
                    name: userNameInput,
                    // Make the score impressive by multiplying by 100
                    score: count * 100,
                };

                // Add the score to the High Scores List
                highScores.push(newScore);
                // Set the High Scores to local Storage and Stringify
                window.localStorage.setItem("highscores", JSON.stringify(highScores));



                // Print the results of the game to the page with the impressive score!
                results.textContent = `${userNameInput} Your score is: ${count * 100}`;

                // Print the High Scores to bottom of page
                highScores.forEach(function (score) {
                    // create li tag for each high score
                    var listOfScores = document.createElement("li");
                    // format the scores to print nicely
                    listOfScores.textContent = score.name + " : " + score.score;

                    // Access the location of ID Highscores 
                    var orderListOfScores = document.querySelector("#highscores");
                    // Display scores on page
                    orderListOfScores.appendChild(listOfScores);
                });

                // Set the count to 0 to stop the timer
                count = 0
            } else {

                // Loop to next Question
                currentQuestionIndex++;
                // Variable for the next question
                var currentQuestion = questions[currentQuestionIndex];
                // Access the location of ID questions
                var titleElement = document.querySelector("#questions");
                // Print New Question
                titleElement.textContent = currentQuestion.title;

                // Access the location of ID Choices
                var currentChoices = document.querySelector("#choices");
                // Print New Question
                currentChoices.textContent = currentQuestion.choices;

                // Clear out old Choices
                currentChoices.innerHTML = "";

                // Make choices Buttons
                currentQuestion.choices.forEach(function (choice, i) {
                    // Make a button for each choice
                    var choicesButtons = document.createElement("button");
                    // Set the attribute of each choice
                    choicesButtons.setAttribute("class", "choice");
                    // Set the value of each choice
                    choicesButtons.setAttribute("value", choice)
                    // Print the choices in the buttons
                    choicesButtons.textContent = choice;

                    // Make the choices into Buttons!
                    choicesButtons.onclick = questionGuess;

                    // Append the choice buttons
                    currentChoices.appendChild(choicesButtons);
                })
            }

        } else {
            // Print Result of Guess to Page
            results.textContent = "Correct!";

            // IF END OF QUESTIONS

            if (currentQuestionIndex === 5) {

                // Get user Name via a prompt
                userNameInput = prompt("What's your name?");

                // Check to see if there is a list already in local Storage, or make a new list
                var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

                // format new score object for current user, and score
                var newScore = {
                    name: userNameInput,
                    // Make the score impressive by multiplying by 100
                    score: count * 100,
                };

                // Add the score to the High Scores List
                highScores.push(newScore);
                // Set the High Scores to local Storage and Stringify
                window.localStorage.setItem("highscores", JSON.stringify(highScores));



                // Print the results of the game to the page with the impressive score!
                results.textContent = `${userNameInput} Your score is: ${count * 100}`;

                // Print the High Scores to bottom of page
                highScores.forEach(function (score) {
                    // create li tag for each high score
                    var listOfScores = document.createElement("li");
                    // format the scores to print nicely
                    listOfScores.textContent = score.name + " : " + score.score;

                    // Access the location of ID Highscores 
                    var orderListOfScores = document.querySelector("#highscores");
                    // Display scores on page
                    orderListOfScores.appendChild(listOfScores);
                });

                // Set the count to 0 to stop the timer
                count = 0
            } else {
                // Loop to next Question
                currentQuestionIndex++;
                // Variable for the next question
                var currentQuestion = questions[currentQuestionIndex];
                // Access the location of ID questions
                var titleElement = document.querySelector("#questions");
                // Print New Question
                titleElement.textContent = currentQuestion.title;

                // Access the location of ID Choices
                var currentChoices = document.querySelector("#choices");
                // Print New Question
                currentChoices.textContent = currentQuestion.choices;

                // Clear out old Choices
                currentChoices.innerHTML = "";

                // Make choices Buttons
                currentQuestion.choices.forEach(function (choice, i) {
                    // Make a button for each choice
                    var choicesButtons = document.createElement("button");
                    // Set the attribute of each choice
                    choicesButtons.setAttribute("class", "choice");
                    // Set the value of each choice
                    choicesButtons.setAttribute("value", choice)
                    // Print the choices in the buttons
                    choicesButtons.textContent = choice;

                    // Make the choices into Buttons!
                    choicesButtons.onclick = questionGuess;

                    // Append the choice buttons
                    currentChoices.appendChild(choicesButtons);
                })

            }

        }

    }
}
// Call the getQuestion Function
getQuestion()


