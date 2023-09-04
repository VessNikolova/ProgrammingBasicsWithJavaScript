function salary(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let jury = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let pointsJudge = Number(input[i + 1]);

        let result = judgeName.length * pointsJudge / 2;
        academyPoints += result;
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }

    }


    console.log(`Sorry, ${actor} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);


}

salary(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
