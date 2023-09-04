function uniquePinNums(input) {
    let endNum1 = Number(input[0]);
    let endNum2 = Number(input[1]);
    let endNum3 = Number(input[2]);


    for (let i = 1; i <= endNum1; i++) {
        for (let j = 1; j <= endNum2; j++) {
            for (let k = 1; k <= endNum3; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    if (j >= 2 && j <= 7 && j !== 4 && j !== 6) {
                        console.log(`${i} ${j} ${k}`);
                    }

                }
            }
        }
    }
}

uniquePinNums(["3", "5", "5"]);