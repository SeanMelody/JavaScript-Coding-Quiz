var h2Message = document.querySelector("#message");


var thing = function () {
    console.log("thing")
}



var count = 100
function setTime() {
    var timer = setInterval(function () {
        count--
        h2Message.textContent = (count)
        if (count === 0) {
            h2Message.textContent = "0"
            clearInterval(timer)
        }
    }, 1000)
}

setTime()