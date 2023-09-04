function sumOf2Numbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let count = 0;
    isValid = false;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            sum = i + j;
            if (sum === magicNum) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
                isValid = true;
                break;
            }

        }
        if (isValid) {
            break;
        }
    }

    if (sum !== magicNum) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}

sumOf2Numbers(["1", "10", "5"]);