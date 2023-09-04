function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let sum = a + b + c;
    let hours = Math.trunc(sum / 60);
    let seconds = sum % 60;

    if (seconds < 10) {
        console.log(`${hours}:0${seconds}`);
    } else {
        console.log(`${hours}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);