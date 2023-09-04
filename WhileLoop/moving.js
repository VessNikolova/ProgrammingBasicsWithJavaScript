function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let home = width * length * height;
    let box = 1;
    let total = 0;

    let currentBoxes = input[index];
    index++;

    while (currentBoxes !== "Done") {
        currentBoxes = Number(currentBoxes);
        total += currentBoxes;

        if (total >= home) {
            console.log(`No more free space! You need ${total - home} Cubic meters more.`);
            return;
        }

        currentBoxes = input[index];
        index++;
    }
    console.log(`${home - total} Cubic meters left.`);


}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
