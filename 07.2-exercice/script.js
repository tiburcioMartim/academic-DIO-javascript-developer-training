const { print, gets } = require('./lib.js');

let biggestPair = null;
let oddSmallest = null;
let n = gets();

for (let i = 0; i < n; i++) {
    let number = gets();
    if (number % 2 === 0) {
        if(biggestPair === null || number > biggestPair){
            biggestPair = number; 
        };              
    } else {
        if(oddSmallest === null || number < oddSmallest){
            oddSmallest = number; 
        };
    };
};

print(biggestPair);
print(oddSmallest);