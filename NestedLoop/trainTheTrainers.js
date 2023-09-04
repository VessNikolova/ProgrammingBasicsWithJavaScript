function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]);
    index++;
    let presentation = input[index];
    index++;

    let sumGrades = 0;
    let count = 0;

    while (presentation !== "Finish") {
        let sum = 0;
        for (let i = 1; i <= jury; i++) {
            let grade = Number(input[index]);
            index++;
            count++;
            sumGrades += grade;
            sum += grade;

        }
        let average = sum / jury;
        console.log(`${presentation} - ${average.toFixed(2)}.`);
        presentation = input[index];
        index++;
    }

    let average = sumGrades / count;

    console.log(`Student's final assessment is ${average.toFixed(2)}.`);



}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
