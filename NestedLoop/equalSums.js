function equalSums(input) {
    let beginning = Number(input[0]);
    let end = Number(input[1]);

    let result = "";

    for (let i = beginning; i <= end; i++) {
        let currentNum = i.toString();
        let odd = 0;
        let even = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            let position = j + 1;
            if (position % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (odd === even) {
            result += `${i} `;
        }


    }
    console.log(result);


}

equalSums(["100000", "100050"]);