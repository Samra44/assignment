function sumEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return {
        even: evenSum,
        odd: oddSum
    };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumEvenOdd(numbers);
console.log(result);  // Output: { even: 30, odd: 25 }
