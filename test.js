var deck = [
    {path: "images/AC.jpg", value: ["1", "11"], suite: "Club"},
    {path: "images/2C.jpg", value: ["2"], suite: "Club"},
    {path: "images/3C.jpg", value: ["3"], suite: "Club"},
    {path: "images/4C.jpg", value: ["4"], suite: "Club"},
    {path: "images/5C.jpg", value: ["5"], suite: "Club"},
    {path: "images/6C.jpg", value: ["6"], suite: "Club"},
    {path: "images/7C.jpg", value: ["7"], suite: "Club"},
    {path: "images/8C.jpg", value: ["8"], suite: "Club"},
    {path: "images/9C.jpg", value: ["9"], suite: "Club"},
    {path: "images/10C.jpg", value: ["10"], suite: "Club"},
    {path: "images/JC.jpg", value: ["10"], suite: "Club"},
    {path: "images/QC.jpg", value: ["10"], suite: "Club"},
    {path: "images/KC.jpg", value: ["10"], suite: "Club"},
    
    {path: "images/AD.jpg", value: ["1", "11"], suite: "Diamond"},
    {path: "images/2D.jpg", value: ["2"], suite: "Diamond"},
    {path: "images/3D.jpg", value: ["3"], suite: "Diamond"},
    {path: "images/4D.jpg", value: ["4"], suite: "Diamond"},
    {path: "images/5D.jpg", value: ["5"], suite: "Diamond"},
    {path: "images/6D.jpg", value: ["6"], suite: "Diamond"},
    {path: "images/7D.jpg", value: ["7"], suite: "Diamond"},
    {path: "images/8D.jpg", value: ["8"], suite: "Diamond"},
    {path: "images/9D.jpg", value: ["9"], suite: "Diamond"},
    {path: "images/10D.jpg", value: ["10"], suite: "Diamond"},
    {path: "images/JD.jpg", value: ["10"], suite: "Diamond"},
    {path: "images/QD.jpg", value: ["10"], suite: "Diamond"},
    {path: "images/KD.jpg", value: ["10"], suite: "Diamond"},

    {path: "images/AS.jpg", value: ["1", "11"], suite: "Spades"},
    {path: "images/2S.jpg", value: ["2"], suite: "Spades"},
    {path: "images/3S.jpg", value: ["3"], suite: "Spades"},
    {path: "images/4S.jpg", value: ["4"], suite: "Spades"},
    {path: "images/5S.jpg", value: ["5"], suite: "Spades"},
    {path: "images/6S.jpg", value: ["6"], suite: "Spades"},
    {path: "images/7S.jpg", value: ["7"], suite: "Spades"},
    {path: "images/8S.jpg", value: ["8"], suite: "Spades"},
    {path: "images/9S.jpg", value: ["9"], suite: "Spades"},
    {path: "images/10S.jpg", value: ["10"], suite: "Spades"},
    {path: "images/JS.jpg", value: ["10"], suite: "Spades"},
    {path: "images/QS.jpg", value: ["10"], suite: "Spades"},
    {path: "images/KS.jpg", value: ["10"], suite: "Spades"},

    {path: "images/AH.jpg", value: ["1", "11"], suite: "Hearts"},
    {path: "images/2H.jpg", value: ["2"], suite: "Hearts"},
    {path: "images/3H.jpg", value: ["3"], suite: "Hearts"},
    {path: "images/4H.jpg", value: ["4"], suite: "Hearts"},
    {path: "images/5H.jpg", value: ["5"], suite: "Hearts"},
    {path: "images/6H.jpg", value: ["6"], suite: "Hearts"},
    {path: "images/7H.jpg", value: ["7"], suite: "Hearts"},
    {path: "images/8H.jpg", value: ["8"], suite: "Hearts"},
    {path: "images/9H.jpg", value: ["9"], suite: "Hearts"},
    {path: "images/10H.jpg", value: ["10"], suite: "Hearts"},
    {path: "images/JH.jpg", value: ["10"], suite: "Hearts"},
    {path: "images/QH.jpg", value: ["10"], suite: "Hearts"},
    {path: "images/KH.jpg", value: ["10"], suite: "Hearts"},
];

var randomIndex = Math.floor(Math.random() * 52);
console.log(deck[randomIndex].path, deck[randomIndex].value[0]);

function addCard (n, target) {

    if (target == "dealer") {
        var dealerHand = document.getElementById("dealer-hand");
        for (var i = 0; i < n; i ++) {
            var card = document.createElement("img");
            var randomIndex = Math.floor(Math.random() * 52);
            card.setAttribute("href", deck[randomIndex].path);
            dealerHand.appendChild(card);
        }
    }
    else {
        var playerHand = document.getElementById("player-hand");
        for (var i = 0; i < n; i ++) {
            var card = document.createElement("img");
            var randomIndex = Math.floor(Math.random() * 52);
            card.setAttribute("href", deck[randomIndex].path);
            playerHand.appendChild(card);
        }
    }
}