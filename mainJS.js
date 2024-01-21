const linksDefault = ["RPShtm.html", "coinHtm.html", "numberHtm.html",]
const game1 = document.getElementById('game1Link')
const game2 = document.getElementById('game2Link')
const game3 = document.getElementById('game3Link')
const linksId = [game1, game2, game3]
const links = document.querySelectorAll(".aImg")

if (localStorage.Answered === undefined) {
    localStorage.setItem("Answered", "Not")
    console.log(localStorage.Answered)
}

let isAnswered = localStorage.Answered

console.log(isAnswered)
console.log(localStorage.Answered)


if (isAnswered != "Yea")
{
    localStorage.setItem("Answered", "Not")
}
console.log(isAnswered)


if (isAnswered === "Not")
{
    links.forEach(setForm)
}

console.log(isAnswered)

if (isAnswered === "Yea")
{
    game1.setAttribute("href", linksDefault[0])
    game2.setAttribute("href", linksDefault[1])
    game3.setAttribute("href", linksDefault[2])
}

console.log(isAnswered)

function setForm(item)
{
    item.href = "formHtml.html"
}
