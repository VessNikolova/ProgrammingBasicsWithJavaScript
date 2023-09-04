function theSong(input) {
    let controlSum = Number(input[0]);

    let result = "";
    let count = 0;
    let forthNum = 0;
    let combination = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (controlSum === i * j + k * l) {
                        if (i < j && k > l) {
                            count++;
                            result += `${i}${j}${k}${l} `;
                            combination = `${i}${j}${k}${l} `;
                        }
                    }
                    if (count === 4) {
                        forthNum = combination;
                    }
                }
            }
        }
    }

    if (count >= 4) {
        console.log(result);
        console.log(`Password: ${forthNum}`);
    } else {
        console.log(result);
        console.log("No!");
    }


}

theSong(["139"]);