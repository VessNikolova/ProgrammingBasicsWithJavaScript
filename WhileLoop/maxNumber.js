function maxNumber(input) {
    let index = 0;
    let num = input[index];
    index++;

    let max = Number.MIN_SAFE_INTEGER;
    
    while (num !== "Stop") {
        let current = Number(num);
        if (current > max) {
            max = current;
        }
        num = input[index];
        index++;

    }
    console.log(max);

}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
