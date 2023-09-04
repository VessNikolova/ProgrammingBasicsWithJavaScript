function bestPlayer(input) {
    let index = 0;
    let player = input[index];
    index++;

    let bestPlayer = "";
    let bestScore = Number.MIN_VALUE;

    while (player !== "END") {
        let scoredGoals = Number(input[index]);
        index++;

        if (scoredGoals > bestScore) {
            bestScore = scoredGoals;
            bestPlayer = player;
        }
        if (scoredGoals >= 10) {
            break;
        }


        player = input[index];
        index++;
    }

    console.log(`${bestPlayer} is the best player!`);

    if (bestScore >= 3) {
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestScore} goals.`);
    }
}

bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"
]);