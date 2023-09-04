function examPreparation(input) {
    let countFail = Number(input[0]);
    let index = 1;
    let nameTask = input[index];
    index++;
    let grade = Number(input[index]);
    index++;


    let count = 0;
    let lastTask = "";
    let sumGrade = 0;
    let fail = 0;

    while (nameTask !== "Enough") {

        if (grade <= 4) {
            fail++;
        }
        if (fail === countFail) {
            console.log(`You need a break, ${countFail} poor grades.`);
            return;
        }


        count++;
        sumGrade += grade;
        lastTask = nameTask;
        nameTask = input[index];
        index++;
        grade = Number(input[index]);
        index++;


    }

    let average = sumGrade / count;


    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${lastTask}`);



}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
