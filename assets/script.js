// Variables
var timerCountdown = document.querySelector("#timer");
var count = 100

// Timer Countdown!

var timerCountdown = document.querySelector("#timer");

var count = 100
function setTime() {
    var timer = setInterval(function () {
        count--
        timerCountdown.textContent = `${count} Seconds Remaining`
        if (count === 0) {

            timerCountdown.textContent = "Game Over"
            clearInterval(timer)
        }
    }, 1000)
}

setTime()


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

