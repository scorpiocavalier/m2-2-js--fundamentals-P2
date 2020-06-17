// Q17
// Take the code you wrote in Q16 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {

    let armstrongNumbers = [];
    
    for(let num=num1; num<=num2; num++) {
        
        let sum = 0;
        let strNum = num.toString();
        let power = strNum.length;
    
        for(let i=0; i<power; i++)
            sum += Math.pow(strNum[i].valueOf(), power);
    
        if(sum === num)
            armstrongNumbers.push(num);
    }

    return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(100, 99999));