function oddEven(input) {
    let count = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= count; i++) {
        let currentNum = Number(input[i]);
        if (i % 2 === 0) {
            evenSum += currentNum;
            if (currentNum < evenMin) {
                evenMin = currentNum;
            }
            if (currentNum > evenMax) {
                evenMax = currentNum;
            }
        } else {
            oddSum += currentNum;
            if (currentNum < oddMin) {
                oddMin = currentNum;
            }
            if (currentNum > oddMax) {
                oddMax = currentNum;
            }
        }
    }

    if (n === 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
    }


}

oddEven(["6", "2", "3", "5", "4", "2", "1"]);