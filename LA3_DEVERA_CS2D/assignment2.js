let maxLimit = prompt("Enter the Limit of the Double Loop:");

for (let x = 0; x <= maxLimit; x++) {  // x variable won't become 1, until the y has surpassed the maxLimit given by the user
    for (let y = 0; y <= maxLimit; y++) { // y variable would keep increasing until it reach the maxLimit given
        let add = x + y; 
        console.log(`[${x}] [${y}] Added value is ${add}`); // using the ${} sign to make things easier 
    }
}