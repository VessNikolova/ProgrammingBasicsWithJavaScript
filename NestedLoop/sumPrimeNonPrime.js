function sumPrime(input) {
    let index = 0;
    let currentNum = input[index];
    index++;

    let sumPrime = 0;
    let sumNotPrime = 0;

    while (currentNum !== "stop") {
        currentNum = Number(currentNum);
        let isPrime = true;
        if (currentNum < 0) {
            console.log("Number is negative.");
            currentNum = input[index];
            index++;
            continue;
        }
        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrime += currentNum;
        } else {
            sumNotPrime += currentNum;
        }

        currentNum = input[index];
        index++;

    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);

}

sumPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);
