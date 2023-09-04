function averageNumber(input) {
    let countNumbers = Number(input[0]);
    
    let index = 1;
    let count = 0;
    let sum = 0;

    for (let i = 1; i <= countNumbers; i++) {
        let currentNum = Number(input[index]);
        index++;
        count++;
        sum += currentNum;

    }

    let average = sum / count;
    console.log(average.toFixed(2));

}

averageNumber(["2", "6", "4"]);