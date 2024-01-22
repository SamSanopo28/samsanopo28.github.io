let submit = document.getElementById('submit')
let newP = document.getElementById('new')
let counter = 0;
let tries = 7;
let random = Math.ceil(Math.random() * 100)
let resultTxt = document.getElementById('resultText')
let tryDisplay = document.getElementById('tries')
let guessAttempt = document.getElementById('yourGuess')
let loseCountDisplay = document.getElementById('loseCount')
let winCountDisplay = document.getElementById('winCount')
submit.addEventListener("click", guess);
tryDisplay.innerText = "Attempts: " + tries
newP.addEventListener("click", newFunc);


if (localStorage.trackLoseNum === undefined) {
    loseCount = 0
    localStorage.setItem("trackLoseNum", loseCount)
    loseCountDisplay.innerText = loseCount
}
else {
    loseCount = parseInt(localStorage.getItem("trackLoseNum"));
    loseCountDisplay.innerText = loseCount

}

if (localStorage.trackWinNum === undefined) {
    winCount = 0
    localStorage.setItem("trackWinNum", winCount)
    winCountDisplay.innerText = winCount
}
else {
    winCount = parseInt(localStorage.getItem("trackWinNum"));
    winCountDisplay.innerText = winCount
}

function newFunc() {
    random = Math.ceil(Math.random() * 100)
    resultTxt.innerText = "Guess a number(1-100)"
    tries = 7;
    tryDisplay.innerText = "Attempts: " + tries
    submit.addEventListener("click", guess);

}
function guess() {
    if (tries != 0) {

        tries--
        let att = guessAttempt.value
                
        if (att != random && tries == 0)
        {
            resultTxt.innerText = "Too Bad! The number was " + random
            tryDisplay.innerText = "Attempts Left: " + tries
            loseCount++
            alert("Lose count:" + loseCount)

            loseCountDisplay.innerText = loseCount
            localStorage.setItem("trackLoseNum", loseCount)
            submit.removeEventListener("click", guess)
         
        }
        else if (att < random) {
            resultTxt.innerText = "Your guess is too low"
            tryDisplay.innerText = "Attempts: " + tries
            console.log(2)

        }
        else if (att > random) {
            resultTxt.innerText = "Your guess is too high"
            tryDisplay.innerText = "Attempts Left: " + tries

        }
        else { 
            resultTxt.innerText = "Correct!"
            tryDisplay.innerText = "Attempts Left: " + tries
            console.log(3)
            winCount++
            winCountDisplay.innerText = winCount
            localStorage.setItem("trackWinNum", winCount)
            submit.removeEventListener("click", guess)

        }
        
        return;
    }


}

function reset() {
    localStorage.clear();
    loseCount = 0;
    winCount = 0;
    loseCountDisplay.innerText = loseCount
    winCountDisplay.innerText = winCount
}
