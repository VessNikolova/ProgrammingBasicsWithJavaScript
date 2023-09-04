function specialNumbers(input) {
    let specialNum = Number(input[0]);

    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNumStr = i.toString();
        let isSpecial = true;
        for (let j = 0; j < currentNumStr.length; j++) {
            let currentDigit = Number(currentNumStr[j]);
            if (specialNum % currentDigit!==0){
                isSpecial = false;
                break;
            }
        }
        if(isSpecial==true){
            result+=`${currentNumStr} `;
        }

    }
    console.log(result);
}

specialNumbers(["3"]);