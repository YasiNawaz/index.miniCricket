var score = 0;
var overs = 0;
var wickets = 0;

function play() {
    const runs = Math.floor(Math.random() * 7); 
    if (runs === 0) {
        wickets++;
        alert("You are out  Total score: " + score + " runs.");
        resetGame();
    } else {
        score += runs;
        overs += 0.1; 
        updateScoreboard();
        if (overs >= 1) {
            alert("End of over  Total score: " + score + " runs.");
            resetGame();
        }
    }
}

function updateScoreboard() {
    document.getElementById("score").innerText = score;
    document.getElementById("overs").innerText = overs.toFixed(1);
    document.getElementById("wickets").innerText = wickets;
}

function resetGame() {
    score = 0;
    overs = 0;
    wickets = 0;
    updateScoreboard();
}
