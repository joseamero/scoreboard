let score1 = 0
let score2 = 0

let score1El = document.getElementById("score1")
let score2El = document.getElementById("score2")

score1El.textContent = score1
score2El.textContent = score2

function add1home() {
    score1 += 1   
    score1El.textContent = score1
}

function add2home() {
    score1 += 2   
    score1El.textContent = score1
}

function add3home() {
    score1 += 3   
    score1El.textContent = score1
}

function add1guest() {
    score2 += 1
    score2El.textContent = score2
}

function add2guest() {
    score2 += 2   
    score2El.textContent = score2
}

function add3guest() {
    score2 += 3   
    score2El.textContent = score2
}

function reset() {
    score1 = 0
    score2 = 0
    score1El.textContent = score1
    score2El.textContent = score2
}