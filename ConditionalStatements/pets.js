function pets(input) {
    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let dayDog = Number(input[2]);
    let dayCat = Number(input[3]);
    let dayTurtleGram = Number(input[4]);

    let dog = days * dayDog;
    let cat = days * dayCat;
    let turtle = days * (dayTurtleGram / 1000);
    let sum = dog + cat + turtle;
    
    if (leftFood >= sum) {
        console.log(`${Math.floor(leftFood - sum)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(sum - leftFood)} more kilos of food are needed.`);
    }


}

pets(["2", "10", "1", "1", "1200"]);
