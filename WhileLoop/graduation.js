function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;


    let fail = 0;
    let sum = 0;
    let year = 1;
    
    while (year <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4) {
            fail++;
            if (fail == 2) {
                break;
            }
            continue;
        }
        sum += grade;
        year++;
    }

    if (fail == 2) {
        console.log(`${name} has been excluded at ${year} grade`);
    } else {
        let average = (sum / 12);
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }


}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);

