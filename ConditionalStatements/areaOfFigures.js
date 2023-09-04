function areaOfFigures(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let sum = 0;
    if (figure == "square") {
        sum = a * a;
        console.log(sum.toFixed(3));
    } else if (figure == "rectangle") {
        sum = a * b;
        console.log(sum.toFixed(3));
    } else if (figure == "circle") {
        sum = Math.PI * (a * a);
        console.log(sum.toFixed(3));
    } else if (figure == "triangle") {
        sum = (a * b) / 2;
        console.log(sum.toFixed(3));
    }
}

areaOfFigures(["rectangle", "7", "2.5"]);