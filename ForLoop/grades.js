function grades(input) {
    let students = Number(input[0]);


    let sumGrades = 0;
    let fail = 0;
    let grade3 = 0;
    let grade4 = 0;
    let top = 0;

    for (let i = 1; i <= students; i++) {
        let grade = Number(input[i]);
        sumGrades += grade;
        if (grade >= 2 && grade <= 2.99) {
            fail++;
        } else if (grade >= 3 && grade <= 3.99) {
            grade3++;
        } else if (grade >= 4 && grade <= 4.99) {
            grade4++;
        } else if (grade >= 5) {
            top++;
        }

    }
    let topAverage = (top / students) * 100;
    let grade4Average = (grade4 / students) * 100;
    let grade3Average = (grade3 / students) * 100;
    let failAverage = (fail / students) * 100;
    let average = sumGrades / students;

    console.log(`Top students: ${topAverage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${grade4Average.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${grade3Average.toFixed(2)}%`);
    console.log(`Fail: ${failAverage.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);

