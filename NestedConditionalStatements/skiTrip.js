function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;
    
    if (room === "room for one person") {
        price = 18;
    } else if (room === "apartment") {
        price = 25;
    } else if (room === "president apartment") {
        price = 35;
    }
    let sum = price * nights;

    if (room === "apartment") {
        if (days < 10) {
            sum = sum * 0.7;
        } else if (days >= 10 && days <= 15) {
            sum = sum * 0.65;
        } else if (days > 15) {
            sum = sum * 0.5;
        }
    } else if (room === "president apartment") {
        if (days < 10) {
            sum = sum * 0.9;
        } else if (days >= 10 && days <= 15) {
            sum = sum * 0.85;
        } else if (days > 15) {
            sum = sum * 0.8;
        }
    }

    if (rating === "positive") {
        sum = sum * 1.25;
    } else {
        sum = sum * 0.9;
    }

    console.log(sum.toFixed(2));

}

skiTrip(["14", "apartment", "positive"]);