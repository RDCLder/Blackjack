// Variable Definitions

var deck = [
    {path: "images/AC.jpg", value: [1, 11], suite: "Club"},
    {path: "images/2C.jpg", value: [2], suite: "Club"},
    {path: "images/3C.jpg", value: [3], suite: "Club"},
    {path: "images/4C.jpg", value: [4], suite: "Club"},
    {path: "images/5C.jpg", value: [5], suite: "Club"},
    {path: "images/6C.jpg", value: [6], suite: "Club"},
    {path: "images/7C.jpg", value: [7], suite: "Club"},
    {path: "images/8C.jpg", value: [8], suite: "Club"},
    {path: "images/9C.jpg", value: [9], suite: "Club"},
    {path: "images/10C.jpg", value: [10], suite: "Club"},
    {path: "images/JC.jpg", value: [10], suite: "Club"},
    {path: "images/QC.jpg", value: [10], suite: "Club"},
    {path: "images/KC.jpg", value: [10], suite: "Club"},
    
    {path: "images/AD.jpg", value: [1, 11], suite: "Diamond"},
    {path: "images/2D.jpg", value: [1], suite: "Diamond"},
    {path: "images/3D.jpg", value: [3], suite: "Diamond"},
    {path: "images/4D.jpg", value: [4], suite: "Diamond"},
    {path: "images/5D.jpg", value: [5], suite: "Diamond"},
    {path: "images/6D.jpg", value: [6], suite: "Diamond"},
    {path: "images/7D.jpg", value: [7], suite: "Diamond"},
    {path: "images/8D.jpg", value: [8], suite: "Diamond"},
    {path: "images/9D.jpg", value: [9], suite: "Diamond"},
    {path: "images/10D.jpg", value: [10], suite: "Diamond"},
    {path: "images/JD.jpg", value: [10], suite: "Diamond"},
    {path: "images/QD.jpg", value: [10], suite: "Diamond"},
    {path: "images/KD.jpg", value: [10], suite: "Diamond"},

    {path: "images/AS.jpg", value: [1, 11], suite: "Spades"},
    {path: "images/2S.jpg", value: [2], suite: "Spades"},
    {path: "images/3S.jpg", value: [3], suite: "Spades"},
    {path: "images/4S.jpg", value: [4], suite: "Spades"},
    {path: "images/5S.jpg", value: [5], suite: "Spades"},
    {path: "images/6S.jpg", value: [6], suite: "Spades"},
    {path: "images/7S.jpg", value: [7], suite: "Spades"},
    {path: "images/8S.jpg", value: [8], suite: "Spades"},
    {path: "images/9S.jpg", value: [9], suite: "Spades"},
    {path: "images/10S.jpg", value: [10], suite: "Spades"},
    {path: "images/JS.jpg", value: [10], suite: "Spades"},
    {path: "images/QS.jpg", value: [10], suite: "Spades"},
    {path: "images/KS.jpg", value: [10], suite: "Spades"},

    {path: "images/AH.jpg", value: [1, 11], suite: "Hearts"},
    {path: "images/2H.jpg", value: [2], suite: "Hearts"},
    {path: "images/3H.jpg", value: [3], suite: "Hearts"},
    {path: "images/4H.jpg", value: [4], suite: "Hearts"},
    {path: "images/5H.jpg", value: [5], suite: "Hearts"},
    {path: "images/6H.jpg", value: [6], suite: "Hearts"},
    {path: "images/7H.jpg", value: [7], suite: "Hearts"},
    {path: "images/8H.jpg", value: [8], suite: "Hearts"},
    {path: "images/9H.jpg", value: [9], suite: "Hearts"},
    {path: "images/10H.jpg", value: [10], suite: "Hearts"},
    {path: "images/JH.jpg", value: [10], suite: "Hearts"},
    {path: "images/QH.jpg", value: [10], suite: "Hearts"},
    {path: "images/KH.jpg", value: [10], suite: "Hearts"}
];

var message = document.getElementById("message");
var dealerHand = document.getElementById("dealer-hand");
var playerHand = document.getElementById("player-hand");

var dealerPoints = document.getElementById("dealerPoints");
var playerPoints = document.getElementById("playerPoints");
var dealerValue = 0;
var playerValue = 0;
var finalCheck = false;

// ------------------------------------------------------------------------------------------

// Function Definitions

function checkValue () {
    
    if (playerValue <= 21 && dealerValue <= 21) {
        if (finalCheck) {
            if (playerValue > dealerValue) {
                message.textContent = "You win!"
            }
            else if (playerValue < dealerValue) {
                message.textContent = "You lose!"
            }
            else {
                message.textContent = "Tie"
            }
        }
    }
    else if (playerValue > 21) {
        message.textContent = "You bust.  You lose!"
    }
    else if (dealerValue > 21) {
        message.textContent = "Dealer busts.  You win!"
    }
}

function addCard (n, target) {

    if (target == "dealer") {
        // var dealerHand = document.getElementById("dealer-hand");
        for (var i = 0; i < n; i ++) {
            let card = document.createElement("img");
            let randomIndex = Math.floor(Math.random() * 52);
            card.src = deck[randomIndex].path;
            dealerHand.appendChild(card);
            dealerValue += deck[randomIndex].value[0];
            dealerPoints.textContent = "Dealer: " + dealerValue;
        }
    }
    else {
        // var playerHand = document.getElementById("player-hand");
        for (var i = 0; i < n; i ++) {
            let card = document.createElement("img");
            let randomIndex = Math.floor(Math.random() * 52);
            card.src = deck[randomIndex].path;
            playerHand.appendChild(card);
            playerValue += deck[randomIndex].value[0];
            playerPoints.textContent = "Player: " + playerValue;
        }
    }
}

// ------------------------------------------------------------------------------------------

// Event Definitions

document.getElementById("deal-button").addEventListener("click", function() {
    addCard(2, "dealer");
    addCard(2, "player");
    checkValue()
});

document.getElementById("hit-button").addEventListener("click", function(){
    addCard(1, "player");
    checkValue()
});


document.getElementById("stand-button").addEventListener("click", function(){
    finalCheck = true;
    while (dealerValue < 17) {
        addCard(1, "dealer");
    }
    checkValue()
});