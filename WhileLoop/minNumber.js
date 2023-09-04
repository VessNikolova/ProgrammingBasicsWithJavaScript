function minNumber(input) {
    let index = 0;
    let data = input[index];
    index++;

    let min = Number.MAX_SAFE_INTEGER;
    
    while (data !== "Stop") {
        let currentNum = Number(data);
        if (currentNum < min) {
            min = currentNum;
        }
        data = input[index];
        index++;

    }
    console.log(min);

}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
