function profit(input) {
    let coins1Lve = Number(input[0]);
    let coins2Lve = Number(input[1]);
    let coins5Lve = Number(input[2]);
    let sum = Number(input[3]);



    for (let i = 0; i <= coins1Lve; i++) {
        for (let j = 0; j <= coins2Lve; j++) {
            for (let k = 0; k <= coins5Lve; k++) {
                if (i * 1 + j * 2 + k * 5 === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"]);