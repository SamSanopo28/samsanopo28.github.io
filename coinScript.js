const showCreditsButton = document.getElementById('showCredits')
const credits = document.getElementById('credits')
const betButton = document.getElementById('submit')
const headsBet = document.getElementById("heads")
const tailsBet = document.getElementById("tails")
let creditIsShown = false
const resultImg = document.getElementById('ResultImg')
const resultTxt = document.getElementById('resultText')
showCreditsButton.addEventListener("click", hideShowCredit)
let loseCountDisplay = document.getElementById('loseCount')
let winCountDisplay = document.getElementById('winCount')
let loseCount = 0;
let winCount = 0;
credits.style.visibility = 'hidden'
credits.style.fontSize = '0em'


if (localStorage.trackLoseCoin === undefined) {
    loseCount = 0
    localStorage.setItem("trackLoseCoin", loseCount)
    loseCountDisplay.innerText = loseCount
}
else {
    loseCount = parseInt(localStorage.getItem("trackLoseCoin"));
    loseCountDisplay.innerText = loseCount

}

if (localStorage.trakWinCoin === undefined) {
    winCount = 0
    localStorage.setItem("trakWinCoin", winCount)
    winCountDisplay.innerText = winCount
}
else {
    winCount = parseInt(localStorage.getItem("trakWinCoin"));
    winCountDisplay.innerText = winCount
}

function hideShowCredit(){
    if (creditIsShown === false)
    {
        credits.style.visibility = 'hidden'
        credits.style.fontSize = '0em'
        creditIsShown = true
        return;
    }

    credits.style.visibility = 'visible'
    credits.style.fontSize = 'initial'
    creditIsShown = false
}

betButton.addEventListener("click", displayResult)

let a = 0;
function displayResult() {
    betButton.removeEventListener("click", displayResult)
    let x = 0;

    if (headsBet.checked) {
        a++
    }
    if (tailsBet.checked) {
        a += 2
    }

    if (a === 0)
    {
        resultTxt.innerText = 'Please select one choice'
        return;
    }

    setTimeout(() => {
        x = 1;
    }, 4000)

    ranText()
    function ranText() {
        if (x != 1) {

            let xRandomBefore = Math.random() * 3
            let xRandom = Math.floor(xRandomBefore)
            console.log(xRandomBefore)

            setTimeout(ranText, xRandomBefore * 100)


            if (xRandom === 1) {
                resultTxt.innerText = "Waiting a bit"
                return;
            }
            else if (xRandom == 2) {
                resultTxt.innerText = "Landing in a few seconds"
                return;
            }
            resultTxt.innerText = "Still mid air"
            return;
        }
        else {
            return
        }
    }

    let random = Math.floor(Math.random() * 5)
    resultImg.setAttribute("src", "CoinFlipping.gif")
    resultTxt.innerText ="Tossing Coin"

    setTimeout(() => {
       

        if (a === 1) {

            if (random < 3) {
                resultImg.setAttribute("src", "CoinHead.jpg")
                resultTxt.innerText = "You Win: The coin landed on heads"
                winCount++
                winCountDisplay.innerText = winCount
                localStorage.setItem("trakWinCoin", winCount)
                a = 0
                return;
            }
            resultImg.setAttribute("src", "CoinTail.jpg")
            resultTxt.innerText = "You Lose: The coin landed on tails"
            a = 0
            loseCount++
            loseCountDisplay.innerText = loseCount
            localStorage.setItem("trackLoseCoin", loseCount)
            return;

        }
        else if(a === 2) {

            if (random < 3) {
                resultImg.setAttribute("src", "CoinTail.jpg")
                resultTxt.innerText = "You Win: The coin landed on tails"
                a = 0
                winCount++
                winCountDisplay.innerText = winCount
                localStorage.setItem("trakWinCoin", winCount)
                return;
            }
            resultImg.setAttribute("src", "CoinHead.jpg")
            resultTxt.innerText = "You Lose: The coin landed on heads"
            loseCount++
            loseCountDisplay.innerText = loseCount
            localStorage.setItem("trackLoseCoin", loseCount)
            a = 0
            return;

        }

        resultImg.setAttribute("src", "CoinSide.jpg")
        resultTxt.innerText = "You Lose: The Coin Landed on its side"
        loseCount++
        loseCountDisplay.innerText = loseCount
        localStorage.setItem("trackLoseCoin", loseCount)
        a = 0
        return;

    }, 4000);

    setTimeout(() => { betButton.addEventListener("click", displayResult) }, 5000)
}

function reset() {
    localStorage.clear();
    loseCount = 0;
    winCount = 0;
    loseCountDisplay.innerText = loseCount
    winCountDisplay.innerText = winCount
}