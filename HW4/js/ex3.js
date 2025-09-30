let i = 0
let guess
const n = Math.floor(Math.random() * 101); 

do {
    guess = parseInt(prompt("Guess a number from 1 - 100"));
    i++

    if(guess > n){
        console.log("Too high, guess again")
    } else if (guess < n){
        console.log("Too low, guess again")
    }
} while ( guess !== n );
console.log(`Correct! It took you ${i} attempts to guess the correct number`)