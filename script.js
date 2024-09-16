//Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.


for (let x = 1; x <=100; x++) {

if (x % 3 === 0 && x % 5 === 0) {
    console.log('Fizz Buzz');
} else if (x % 3 === 0) {
    console.log('Fizz');
} else if (x  % 5 === 0) {
    console.log ('Buzz');
} else console.log(x);
}


///Part two
console.log('Part Two');

let n = 4;
let number = n;

while (true) {
    let checkPrime = true;

    if (number <= 1) {
        checkPrime = false;
    } else if (number <= 3) {
        checkPrime = true;
    } else if (number % 2 === 0 || number % 3 === 0) {
        checkPrime = false;
    } else {
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                checkPrime = false;
                break;
            }
        }
    }

    if (checkPrime) {
        console.log(`The next prime number to ${n} is ${number}.`);
        break;
    }

    number += 1;
}


///Part Three
console.log('Part Three');
   
const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let row = '';
let cell = '';
let isInCell = false; 
let isInRow = true; 

for (let i = 0; i < data.length; i++) {
    const char = data[i];

    if (char === ',') {
        if (isInCell) {
            row += cell;
            cell = '';
            isInCell = false;
        }
        row += ', ';
    } else if (char === '\n') {
        if (isInCell) {
            row += cell;
            cell = '';
            isInCell = false;
        }
        console.log(row);
        row = '';
    } else {
        cell += char;
        isInCell = true;
    }
}

if (isInCell) {
    row += cell;
}
if (row.length > 0) {
    console.log(row);
}