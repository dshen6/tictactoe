let currentPlayer = "x";
let gameResult;

// this function is called everytime a button is clicked.
// Q: What are the values of buttonId and tileId when Tile 1 is clicked? Tile 5?
function performLogic(buttonId, tileId) {
    $(buttonId).hide();
    $(tileId).text(currentPlayer);
    changePlayer();
    updateGameState()
    showGameState();
}

// changes the current player's turn
// Q: What if I wanted my players to be "Kobe" and "Lebron" instead of "x" and "o"?
//      What lines of code would I need to change?
function changePlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x";
    }
}

// decide if a player won, or if there's a draw
// Q: What variable do update in this function?
function updateGameState() {
}

function showGameState() {
    $("h2").text(gameResult);
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

