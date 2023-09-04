function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;

    let totalPieces = width * length;
    let totalTakes = 0;
    let currentPieces = input[index];
    index++;

    while (currentPieces !== "STOP") {
        currentPieces = Number(currentPieces);
        totalTakes += currentPieces;
        if (totalPieces <= totalTakes) {
            console.log(`No more cake left! You need ${totalTakes - totalPieces} pieces more.`);
            return;
        }


        currentPieces = input[index];
        index++;
    }

    console.log(`${totalPieces - totalTakes} pieces are left.`);



}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);

