function challengeTheWedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);

    let count = 0;
    let result = "";


    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {

            count++;
            if (count > tables) {
                break;
            } else {
                result += `(${i} <-> ${j}) `;
            }

        }
    }


    console.log(result);
}

challengeTheWedding(["2", "2", "3"]);