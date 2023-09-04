function carNums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            for (let k = startNum; k <= endNum; k++) {
                for (let l = startNum; l <= endNum; l++) {
                    if (i > l && (j + k) % 2 === 0) {
                        if (i % 2 === 0 && l % 2 !== 0) {
                            result += `${i}${j}${k}${l} `;
                        }
                        else if (i % 2 !== 0 && l % 2 === 0) {
                            result += `${i}${j}${k}${l} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

carNums(["3", "5"]);