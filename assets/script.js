var h2Message = document.querySelector("#message");
var timer = document.querySelector(".timer")

var thing = function () {
    console.log("thing")
}



// var count = 100
// function setTime() {
//     var count = 10
//     var timer = setInterval(function () {
//         count--
//         h2Message.textContent = (count)
//         if (count === 0) {
//             h2Message.textContent = "Game Over"
//             clearInterval(timer)
//         }
//     }, 100)
// }

// setTime()

var timer = 10;
var timerEl = document.getElementById("time");

// function startQuiz() {
//     var timer = setInterval(clockTick, 100)
// }


function clockTick() {

    timer.textContent = time;
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

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

