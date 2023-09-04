function pipesPool(input) {
    let volumePool = Number(input[0]);
    let firstPipe = Number(input[1]);
    let secondPipe = Number(input[2]);
    let missingHours = Number(input[3]);

    let first = missingHours * firstPipe;
    let second = missingHours * secondPipe;
    let sum = first + second;

    if (volumePool >= sum) {
        let firstPer = first * (100 / sum);
        let secondPer = second * (100 / sum);
        let sumPer = sum * (100 / volumePool);
        console.log(`The pool is ${sumPer.toFixed(2)}% full. Pipe 1: ${firstPer.toFixed(2)}%. Pipe 2: ${secondPer.toFixed(2)}%.`);
    } else {
        console.log(`For ${missingHours} hours the pool overflows with ${(sum - volumePool).toFixed(2)} liters.`);
    }
}

pipesPool(["1000", "100", "120", "3"]);