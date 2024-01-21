const opponent = document.getElementById('HeadAI')
const opponentChoice = document.getElementById('picked')
const result = document.getElementById('result')
const manChoice = document.getElementById('manPicked')
const button = document.getElementById('Rock')
const button2 = document.getElementById('Paper')
const button3 = document.getElementById('Scissors')
const textShowPicked = document.getElementById('manPicked')
const creditShow = document.getElementById('showCredits')
const credits = document.getElementById('credits')
const enemyImgGet = document.getElementById('imgGet')
let loseCountDisplay = document.getElementById('loseCount')
let winCountDisplay = document.getElementById('winCount')
let drawCountDisplay = document.getElementById('drawCount')
let loseCount = 0;
let winCount = 0;
let drawCount = 0;
if (localStorage.trackLose === undefined) {
    loseCount = 0
    localStorage.setItem("trackLose", loseCount)
    loseCountDisplay.innerText = loseCount
}
else {
    loseCount = parseInt(localStorage.getItem("trackLose"));
    loseCountDisplay.innerText = loseCount

}

if (localStorage.trackWin === undefined) {
    winCount = 0
    localStorage.setItem("trackWin", winCount)
    winCountDisplay.innerText = winCount
}
else {
    winCount = parseInt(localStorage.getItem("trackWin"));
    winCountDisplay.innerText = winCount
}

if (localStorage.trackDraw === undefined) {
    drawCount = 0
    localStorage.setItem("trackDraw", drawCount)
    drawCountDisplay.innerText = drawCount
}
else {
    drawCount = parseInt(localStorage.getItem("trackDraw"));
    drawCountDisplay.innerText = drawCount
}

function reset() {
    localStorage.clear();
    loseCount = 0;
    winCount = 0;
    drawCount = 0;
    loseCountDisplay.innerText = loseCount
    winCountDisplay.innerText = winCount
    drawCountDisplay.innerText = drawCount
}

button.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 8)
    manChoice.innerText = 'You have picked Rock'

    if (x < 4) {
        opponentChoice.innerText = 'Enemy has picked Paper'
        
        enemyImgGet.innerHTML = '<img src="paperImg.png" width="100" height="100"/>'
        result.innerText = 'Lose'
        result.style.color = 'red'
        alertRes();
        loseCount++
        loseCountDisplay.innerText = loseCount
        localStorage.setItem("trackLose", loseCount)
        console.log(loseCount)

        return;
    }
    else if (!x < 4 && x < 6.5) {
        opponentChoice.innerText = 'Enemy has picked Rock'
        enemyImgGet.innerHTML = '<img src="rockImg.png" width="100" height="100"/>'
        result.innerText = 'Draw'
        result.style.color = 'black'
        alertRes();

        drawCount++
        drawCountDisplay.innerText = drawCount
        localStorage.setItem("trackDraw", drawCount)
        console.log(drawCount)

        return;
    }
    opponentChoice.innerText = 'Enemy has picked Scissors'
    enemyImgGet.innerHTML = '<img src="scissorsImg.png" width="100" height="100"/>'
    result.innerText = 'Win'
    result.style.color = 'green'
    alertRes();
    winCount++
    winCountDisplay.innerText = winCount
    localStorage.setItem("trackWin", winCount)
    console.log(winCount)
});

button2.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 8)
    manChoice.innerText = 'You have picked Paper'

    if (x < 4) {
        opponentChoice.innerText = 'Enemy has picked Scissors'
        result.innerText = 'Lose'
        result.style.color = 'red'
        enemyImgGet.innerHTML = '<img src="scissorsImg.png" width="100" height="100"/>'
        loseCountDisplay.innerText = loseCount
        alertRes();
        loseCount++
        loseCountDisplay.innerText = loseCount
        localStorage.setItem("trackLose", loseCount)
        console.log(loseCount)
        return;
    }
    else if (!x < 4 && x < 6.5) {
        opponentChoice.innerText = 'Enemy has picked Paper'
        result.innerText = 'Draw'
        result.style.color = 'black'
        enemyImgGet.innerHTML = '<img src="paperImg.png" width="100" height="100"/>'
        alertRes();

        drawCount++
        drawCountDisplay.innerText = drawCount
        localStorage.setItem("trackDraw", drawCount)
        console.log(drawCount)

        return;
    }
    opponentChoice.innerText = 'Enemy has picked Rock'
    result.innerText = 'Win'
    result.style.color = 'green'
    enemyImgGet.innerHTML = '<img src="rockImg.png" width="100" height="100"/>'
    alertRes();
    winCount++
    winCountDisplay.innerText = winCount
    localStorage.setItem("trackWin", winCount)
    console.log(winCount)
});
   

button3.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 8)
    manChoice.innerText = 'You have picked Scissors'

    if (x < 4) {
        opponentChoice.innerText = 'Enemy has picked Rock'
        result.innerText = 'Lose'
        result.style.color = 'red'
        enemyImgGet.innerHTML = '<img src="rockImg.png" width="100" height="100"/>'
        loseCount++
        loseCountDisplay.innerText = loseCount
        localStorage.setItem("trackLose", loseCount)
        alertRes();
        loseCount++
        loseCountDisplay.innerText = loseCount
        localStorage.setItem("trackLose", loseCount)
        console.log(loseCount)

        return;
    }
    else if (!x < 4 && x < 6.5) {
        opponentChoice.innerText = 'Enemy has picked Scissors'
        result.innerText = 'Draw'
        result.style.color = 'black'
        enemyImgGet.innerHTML = '<img src="scissorsImg.png" width="100" height="100"/>'
        alertRes();
        drawCount++
        drawCountDisplay.innerText = drawCount
        localStorage.setItem("trackDraw", drawCount)
        console.log(drawCount)
        return;
    }
    opponentChoice.innerText = 'Enemy has picked Paper'
    result.innerText = 'Win'
    result.style.color = 'green'
    enemyImgGet.innerHTML = '<img src="paperImg.png" width="100" height="100"/>'
    alertRes();
    winCount++
    winCountDisplay.innerText = winCount
    localStorage.setItem("trackWin", winCount)
    console.log(winCount)
});

function alertRes() {
    setTimeout( ()=> {
    if (result.innerText === "Lose") {
        alert("You are a loser")
    }
    else if (result.innerText === "Draw") {
        alert("You are a drawer")
    }
    else {
        alert("You are a winner")
    }
    }, 100);
}

creditShow.addEventListener("click", creditsDisplay)

function creditsDisplay() {
    if (credits.innerHTML === "") {
        credits.innerHTML = '<a title="Rock PNG" href="https://pluspng.com/rock-png-571.html">Rock PNG</a> <a href="https://www.freepik.com/free-photo/white-paper-texture_1033849.htm#query=paper%20transparent%20background&position=45&from_view=search&track=ais&uuid=862bfa17-e9f6-481d-8d4e-648aed4385c0">Image by kues1</a> on Freepik <a href = "https://www.freepik.com/free-photo/steel-plastic-clip-nobody-red_1044666.htm#query=scissors&position=21&from_view=search&track=sph&uuid=dfa10335-b71a-4bda-9f38-94be7f3f73a6" > Image by mrsiraphol</a > on Freepik'
        textShowPicked.style.top = '28vh'
    }
    else {
        credits.innerHTML = ""
        textShowPicked.style.top = '34vh'
    }
}