function building(input) {
    let levels = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = levels; i >= 1; i--) {
        let floor = "";
        for (let j = 0; j < rooms; j++) {

            if (i === levels) {
                floor += "L" + i + j + " ";
            } else if (i % 2 === 0) {
                floor += "O" + i + j + " ";
            } else {
                floor += "A" + i + j + " ";
            }
        }
        console.log(floor);
    }


}

building(["6", "4"]);