function secretDoorLock(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            for (let k = 1; k <= num3; k++) {
                if (i % 2 === 0 && k % 2 === 0 && j >= 2 && j <= 7 && j !== 4 && j !== 6) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }

}

secretDoorLock(["3", "5", "5"]);