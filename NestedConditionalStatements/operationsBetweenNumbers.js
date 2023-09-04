function operationBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let sum = 0;

    if (operator === "+") {
        sum = n1 + n2;
        if (sum % 2 == 0) {
            console.log(`${n1} + ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} + ${n2} = ${sum} - odd`);
        }
    } else if (operator === "-") {
        sum = n1 - n2;
        if (sum % 2 == 0) {
            console.log(`${n1} - ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} - ${n2} = ${sum} - odd`);
        }
    } else if (operator === "*") {
        sum = n1 * n2;
        if (sum % 2 == 0) {
            console.log(`${n1} * ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} * ${n2} = ${sum} - odd`);
        }
    } else if (operator === "/") {
        sum = n1 / n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`);
        }
    } else if (operator === "%") {
        sum = n1 % n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} % ${n2} = ${sum}`);
        }
    }
}

operationBetweenNumbers(["10", "0", "%"]);