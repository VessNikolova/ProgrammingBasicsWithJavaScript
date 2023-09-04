function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";

    if (season === "Winter") {
        if (group === "girls" || group === "boys") {
            price = 9.6;
        } else {
            price = 10;
        }
    } else if (season === "Spring") {
        if (group === "girls" || group === "boys") {
            price = 7.2;
        } else {
            price = 9.5;
        }

    } else if (season === "Summer") {
        if (group === "girls" || group === "boys") {
            price = 15;
        } else {
            price = 20;
        }
    }

    if (season === "Winter") {
        if (group === "girls") {
            sport = "Gymnastics";
        } else if (group === "boys") {
            sport = "Judo";
        } else {
            sport = "Ski";
        }
    } else if (season === "Spring") {
        if (group === "girls") {
            sport = "Athletics";
        } else if (group === "boys") {
            sport = "Tennis";
        } else {
            sport = "Cycling";
        }
    } else if (season === "Summer") {
        if (group === "girls") {
            sport = "Volleyball";
        } else if (group === "boys") {
            sport = "Football";
        } else {
            sport = "Swimming";
        }
    }

    let sum = (students * price) * nights;
    if (students >= 50) {
        sum = sum * 0.5;
    } else if (students >= 20 && students < 50) {
        sum = sum * 0.85;
    } else if (students >= 10 && students < 20) {
        sum = sum * 0.95;
    }

    console.log(`${sport} ${sum.toFixed(2)} lv.`);



}

schoolCamp(["Spring", "girls", "20", "7"]);