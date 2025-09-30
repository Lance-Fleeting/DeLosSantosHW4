
function numChecker(num) {
    // convert string into number 
    const numberD = parseFloat(num)

    if(!isNaN(numberD) && numberD >= 1 && numberD <= 100){
        console.log(`Thank You! You entered ${numberD}, a valid number.`);
    } else { 
            console.log(`Sorry ${num} is not a valid entry`)
        }
}

// variable to get prompt response 
const num = prompt("Enter a number 1 - 100");

// calls function 
numChecker (num);
 
numChecker (9);
numChecker (10.2);
numChecker ("Hello");
numChecker(" ");
numChecker("");
numChecker(200);
