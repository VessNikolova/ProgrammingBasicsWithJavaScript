function bonusScore(input) {
    let startpoints = Number(input[0]);

    let bonus = 0;

    if (startpoints <= 100) {
        bonus = 5;
    } else if (startpoints > 1000) {
        bonus = startpoints * 0.1;
    } else if (startpoints > 100) {
        bonus = startpoints * 0.2;
    }

    let moreBonus = 0;

    if (startpoints % 2 === 0) {
        moreBonus = 1;
    } else if (startpoints % 10 === 5) {
        moreBonus = 2;
    }
    console.log(bonus + moreBonus);
    console.log(bonus + moreBonus + startpoints);
}

bonusScore(["2703"]);