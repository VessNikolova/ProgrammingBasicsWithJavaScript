function equalPairs(input) {
    let pairs = Number(input[0]);

    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= pairs; i++) {
        let first = Number(input[i]);
        let second = Number(input[i + 1]);
        sum = first + second;
        if (sum > max) {
            max = sum;
        }
        if (sum < min) {
            min = sum;
        }

    }
    if ((max - min) == 0) {
        console.log(`Yes, value=${max}`);
    } else {
        console.log(`No, maxdiff=${max - min}`);
    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);


