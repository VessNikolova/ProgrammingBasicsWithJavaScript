function bikeRace(input) {
    let youngGroup = Number(input[0]);
    let oldGroup = Number(input[1]);
    let trace = input[2];

    let juniorTax = 0;
    let seniorTax = 0;
    let all = youngGroup + oldGroup;

    if (trace === "trail") {
        juniorTax = 5.5;
        seniorTax = 7;
    } else if (trace === "cross-country") {
        juniorTax = 8;
        seniorTax = 9.5;
        if (all >= 50) {
            juniorTax = juniorTax * 0.75;
            seniorTax = seniorTax * 0.75;
        }
    } else if (trace === "downhill") {
        juniorTax = 12.25;
        seniorTax = 13.75;
    } else if (trace === "road") {
        juniorTax = 20;
        seniorTax = 21.50;
    }

    let sum = youngGroup * juniorTax + oldGroup * seniorTax;
    let afterSum = sum * 0.95;

    console.log(afterSum.toFixed(2));




}

bikeRace(["10", "20", "trail"]);