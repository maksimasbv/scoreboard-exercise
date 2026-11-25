let homeScore = 0;
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score")

let resultEl = document.getElementById("resultMsg")

console.log(homeScore)

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function startScore() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    
    guestScore = 0
    guestScoreEl.textContent = guestScore
    
    resultEl.textContent = "Playing...";
}

function finishScore() {
  const homeScore = Number(homeScoreEl.textContent);
  const guestScore = Number(guestScoreEl.textContent);

  if (homeScore > guestScore) {
    resultEl.textContent = "Home Team wins!";
  } else if (guestScore > homeScore) {
    resultEl.textContent = "Guest Team wins!";
  } else {
     resultEl.textContent = "It's a tie!";
  }
}
  
