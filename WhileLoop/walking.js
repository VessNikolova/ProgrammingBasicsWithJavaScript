function walking(input) {
    let index = 0;
    let currentSteps = input[index];
    index++;

    let sum = 0;

    while (currentSteps !== "Going home") {
        currentSteps = Number(currentSteps);
        sum += currentSteps;
        
        if (sum >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${sum - 10000} steps over the goal!`);
            return;
        }
        currentSteps = input[index];
        index++;
    }

    let stepsHome = Number(input[index]);
    sum += stepsHome;

    if (sum >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${sum - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - sum} more steps to reach goal.`);
    }

}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]);

