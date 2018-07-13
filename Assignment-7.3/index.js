// loop that iterates integers from 1 to 100
for (var i=1; i <= 100; i++) {
    
    // to print for multiple of 3 and 5
    if (i % 3==0 && i % 5==0) {
        console.log(`${i} FizzBuzz`);
    } 
    
    // to print for multiple of 3 only
    else if (i % 3==0){
        console.log(`${i} Fizz`);
    }
    
    // to print for multiple of 5 only
    else if (i % 5==0) {
        console.log(`${i} Buzz`);
    }
    
    // to print remaining numbers
    else {
        console.log(i);
    }
}