let balance = 100;

function updateBalance(amount) {
    balance += amount;
    document.getElementById("balance").textContent = "Balance: $" + balance;
}

function spin() {
    const bet = parseInt(document.getElementById("bet").value);

    if (isNaN(bet) || bet > balance || bet <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }

    const symbols = ["🍒", "🍋", "🍊", "🍐"];
    const reel1 = document.getElementById("reel1");
    const reel2 = document.getElementById("reel2");
    const reel3 = document.getElementById("reel3");
    const reel4 = document.getElementById("reel4");

    const result1 = symbols[Math.floor(Math.random() * symbols.length)];
    const result2 = symbols[Math.floor(Math.random() * symbols.length)];
    const result3 = symbols[Math.floor(Math.random() * symbols.length)];
    const result4 = symbols[Math.floor(Math.random() * symbols.length)];


    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;
    reel4.textContent = result4;

    if (result1 === result2 && result2 === result3) {
        const winnings = bet * 10;
        updateBalance(winnings);
        document.getElementById("result").textContent = "Jackpot! You win $" + winnings + "!";
    } else if (result1 === result2 || result2 === result3 || result1 === result3) {
        const winnings = bet * 2;
        updateBalance(winnings);
        document.getElementById("result").textContent = "Partial win! You win $" + winnings + "!";
    } else {
        updateBalance(-bet);
        document.getElementById("result").textContent = "You lose! Better luck next time.";
    }

    if (balance <= 0) {
        alert("Game Over! You have no more balance.");
        balance = 100; 
        updateBalance(0); 
    }
}

