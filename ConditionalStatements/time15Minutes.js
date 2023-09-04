function time15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let sum = hour * 60 + minutes + 15;

    let newHour = Math.trunc(sum / 60);
    let newMinutes = sum % 60;

    if (newHour > 23) {
        newHour = 0;
    }
    if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`)
    }


}

time15Minutes(["1", "46"]);