let homePoint = document.getElementById('home-score')
let guestPoint = document.getElementById('guest-score')

let homeScore = 0
let guestScore = 0

function homeAdd1() {
    homeScore += 1
    homePoint.textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
    homePoint.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    homePoint.textContent = homeScore
}

function guestAdd1() {
    guestScore += 1
    guestPoint.textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
    guestPoint.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    guestPoint.textContent = guestScore
}

function restart() {
    homeScore = 0
    guestScore = 0

    guestPoint.textContent = guestScore
    homePoint.textContent = homeScore
}