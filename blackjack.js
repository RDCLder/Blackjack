// Variable Definitions

function initiateDecks (n) {

    var decks = [];
    var deckTemplate = [
        {path: "images/AC.jpg", value: [11, 1], suit: "Club"},
        {path: "images/2C.jpg", value: [2], suit: "Club"},
        {path: "images/3C.jpg", value: [3], suit: "Club"},
        {path: "images/4C.jpg", value: [4], suit: "Club"},
        {path: "images/5C.jpg", value: [5], suit: "Club"},
        {path: "images/6C.jpg", value: [6], suit: "Club"},
        {path: "images/7C.jpg", value: [7], suit: "Club"},
        {path: "images/8C.jpg", value: [8], suit: "Club"},
        {path: "images/9C.jpg", value: [9], suit: "Club"},
        {path: "images/10C.jpg", value: [10], suit: "Club"},
        {path: "images/JC.jpg", value: [10], suit: "Club"},
        {path: "images/QC.jpg", value: [10], suit: "Club"},
        {path: "images/KC.jpg", value: [10], suit: "Club"},
        
        {path: "images/AD.jpg", value: [11, 1], suit: "Diamond"},
        {path: "images/2D.jpg", value: [2], suit: "Diamond"},
        {path: "images/3D.jpg", value: [3], suit: "Diamond"},
        {path: "images/4D.jpg", value: [4], suit: "Diamond"},
        {path: "images/5D.jpg", value: [5], suit: "Diamond"},
        {path: "images/6D.jpg", value: [6], suit: "Diamond"},
        {path: "images/7D.jpg", value: [7], suit: "Diamond"},
        {path: "images/8D.jpg", value: [8], suit: "Diamond"},
        {path: "images/9D.jpg", value: [9], suit: "Diamond"},
        {path: "images/10D.jpg", value: [10], suit: "Diamond"},
        {path: "images/JD.jpg", value: [10], suit: "Diamond"},
        {path: "images/QD.jpg", value: [10], suit: "Diamond"},
        {path: "images/KD.jpg", value: [10], suit: "Diamond"},

        {path: "images/AS.jpg", value: [11, 1], suit: "Spades"},
        {path: "images/2S.jpg", value: [2], suit: "Spades"},
        {path: "images/3S.jpg", value: [3], suit: "Spades"},
        {path: "images/4S.jpg", value: [4], suit: "Spades"},
        {path: "images/5S.jpg", value: [5], suit: "Spades"},
        {path: "images/6S.jpg", value: [6], suit: "Spades"},
        {path: "images/7S.jpg", value: [7], suit: "Spades"},
        {path: "images/8S.jpg", value: [8], suit: "Spades"},
        {path: "images/9S.jpg", value: [9], suit: "Spades"},
        {path: "images/10S.jpg", value: [10], suit: "Spades"},
        {path: "images/JS.jpg", value: [10], suit: "Spades"},
        {path: "images/QS.jpg", value: [10], suit: "Spades"},
        {path: "images/KS.jpg", value: [10], suit: "Spades"},

        {path: "images/AH.jpg", value: [11, 1], suit: "Hearts"},
        {path: "images/2H.jpg", value: [2], suit: "Hearts"},
        {path: "images/3H.jpg", value: [3], suit: "Hearts"},
        {path: "images/4H.jpg", value: [4], suit: "Hearts"},
        {path: "images/5H.jpg", value: [5], suit: "Hearts"},
        {path: "images/6H.jpg", value: [6], suit: "Hearts"},
        {path: "images/7H.jpg", value: [7], suit: "Hearts"},
        {path: "images/8H.jpg", value: [8], suit: "Hearts"},
        {path: "images/9H.jpg", value: [9], suit: "Hearts"},
        {path: "images/10H.jpg", value: [10], suit: "Hearts"},
        {path: "images/JH.jpg", value: [10], suit: "Hearts"},
        {path: "images/QH.jpg", value: [10], suit: "Hearts"},
        {path: "images/KH.jpg", value: [10], suit: "Hearts"}
    ];

    for (var i = 0; i < n; i ++) {
        decks.push(deckTemplate);
    }
    return decks;
}

var numDecks = prompt("Enter the number of decks to play with (2-8):", 2);
if (numDecks < 2) {
    numDecks = 2;
}
else if (numDecks > 8) {
    numDecks = 8;
}
var allDecks = initiateDecks(numDecks);
var discardPile = 0;

var message1 = document.getElementById("message1");
var message2 = document.getElementById("message2");
var dealerHand = document.getElementById("dealer-hand");
var playerHand = document.getElementById("player-hand");

var dealerPoints = document.getElementById("dealerPoints");
var playerPoints = document.getElementById("playerPoints");
var dealerAces = 0;
var playerAces = 0;
var dealerValue = 0;
var playerValue = 0;

var bet = 10;
var poolText = document.getElementById("poolText");
var pool = 500;

var finalCheck = false;
var newGame = true;
var playerName = prompt("Please enter your name:", "Player Name");
playerPoints.textContent = playerName + ": ";

// ------------------------------------------------------------------------------------------

// Function Definitions

function checkValue () {
    
    if (playerValue <= 21 && dealerValue <= 21) {
        if (finalCheck) {
            if (playerValue > dealerValue) {
                message1.textContent =  playerName + " wins!";
                message2.textContent = "Click Deal for new game.";
                pool = Number(pool) + 2 * Number(bet);
                poolText.textContent = "Pool: " + pool;
            }
            else if (playerValue < dealerValue) {
                message1.textContent = "Dealer wins!";
                message2.textContent = "Click Deal for new game.";
            }
            else {
                message1.textContent = "Tie!";
                message2.textContent = "Click Deal for new game.";
                pool = Number(pool) + Number(bet);
                poolText.textContent = "Pool: " + pool;
            }
        }
    }
    else if (playerValue > 21) {
        message1.textContent = playerName + " busts! Dealer wins!";
        message2.textContent = "Click Deal for new game.";
    }
    else if (dealerValue > 21) {
        message1.textContent = "Dealer busts! " + playerName + " wins!"
        message2.textContent = "Click Deal for new game."
        pool = Number(pool) + 2 * Number(bet);
        poolText.textContent = "Pool: " + pool;
    }
}

function addCard (n, target) {

    if (target == "dealer") {
        for (var i = 0; i < n; i ++) {
            let card = document.createElement("img");
            let deck = allDecks[Math.floor(Math.random() * numDecks)];
            let randomIndex = Math.floor(Math.random() * deck.length);
            if (deck[randomIndex].value.length == 2) {
                dealerAces ++;
            }
            card.src = deck[randomIndex].path;
            dealerHand.appendChild(card);
            dealerValue += deck[randomIndex].value[0];
            while (dealerValue > 21 && dealerAces > 0) {
                dealerValue -= 10;
                dealerAces --;
            }
            dealerPoints.textContent = "Dealer: " + dealerValue;
            deck.splice(randomIndex, 1);
            discardPile ++;
        }
    }
    else {
        for (var i = 0; i < n; i ++) {
            let card = document.createElement("img");
            let deck = allDecks[Math.floor(Math.random() * numDecks)];
            let randomIndex = Math.floor(Math.random() * deck.length);
            if (deck[randomIndex].value.length == 2) {
                playerAces ++;
            }
            card.src = deck[randomIndex].path;
            playerHand.appendChild(card);
            playerValue += deck[randomIndex].value[0];
            while (playerValue > 21 && playerAces > 0) {
                playerValue -= 10;
                playerAces --;
            }
            playerPoints.textContent = playerName + ": " + playerValue;
            deck.splice(randomIndex, 1);
        }
    }
}

// ------------------------------------------------------------------------------------------

// Event Definitions

document.getElementById("deal-button").addEventListener("click", function() {
    
    // Reset everything to pre-game state
    while (dealerHand.lastChild) {
        dealerHand.removeChild(dealerHand.lastChild);
    }
    while (playerHand.lastChild) {
        playerHand.removeChild(playerHand.lastChild);
    }
    message1.textContent = "";
    message2.textContent = "";
    playerAces = 0;
    dealerValue = 0;
    dealerPoints.textContent = "Dealer: "
    dealerAces = 0;
    playerValue = 0;
    playerPoints.textContent = playerName + ": "
    finalCheck = false;
    if (discardPile == numDecks * 26) {
        allDecks = initiateDecks(numDecks);
        discardPile = 0;
    }

    // Initiate the game
    bet = prompt("Enter the bet:", "10");
    if (Number(pool) <= bet) {
        bet = Number(pool);
        pool = 0;
    }
    else {
        pool = Number(pool) - Number(bet);
    }
    poolText.textContent = "Pool: " + pool;
    message1.textContent = "Bet: " + bet;

    let card = document.createElement("img");
    card.id = "hole";
    card.src = "images/Gray_back.jpg";
    dealerHand.appendChild(card);
    addCard(1, "dealer");
    addCard(2, "player");
    checkValue()
});

document.getElementById("hit-button").addEventListener("click", function(){
    addCard(1, "player");
    checkValue()
});


document.getElementById("stand-button").addEventListener("click", function(){
    finalCheck = true;
    let card = document.createElement("img");
    let deck = allDecks[Math.floor(Math.random() * numDecks)];
    let randomIndex = Math.floor(Math.random() * deck.length);
    card.src = deck[randomIndex].path;
    hole = document.getElementById("hole");
    dealerHand.replaceChild(card, hole);
    dealerValue += deck[randomIndex].value[0];
    dealerPoints.textContent = "Dealer: " + dealerValue;
    deck.splice(randomIndex, 1);
    while (dealerValue < 17) {
        addCard(1, "dealer");
    }
    checkValue()
});