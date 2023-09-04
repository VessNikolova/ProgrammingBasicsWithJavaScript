function suitcaseLoad(input) {
    let index = 0;
    let freeCapacity = Number(input[index]);
    index++;
    let currentSuitcase = input[index];
    index++;

    let loadVolume = 0;
    let countSuitcases = 0;

    while (currentSuitcase !== "End") {
        currentSuitcase = Number(currentSuitcase);

        countSuitcases++;
        if (countSuitcases % 3 === 0) {
            loadVolume += currentSuitcase * 1.1;
        } else {
            loadVolume += currentSuitcase;
        }
        if (loadVolume > freeCapacity) {
            countSuitcases--;
            break;
        }
        currentSuitcase = input[index];
        index++;
    }

    if (loadVolume > freeCapacity) {
        console.log("No more space!");
        console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
    } else {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
    }

}

suitcaseLoad(["700.5", "180", "340.6", "126", "220"]);