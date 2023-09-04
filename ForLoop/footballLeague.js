function footballLeague(input) {
    let capacity = Number(input[0]);
    let fans = Number(input[1]);

    let aFans = 0;
    let bFans = 0;
    let vFans = 0;
    let gFans = 0;


    for (let i = 1; i <= fans + 1; i++) {
        let sector = input[i];
        if (sector === "A") {
            aFans++;
        } else if (sector === "B") {
            bFans++;
        } else if (sector === "V") {
            vFans++;
        } else if (sector === "G") {
            gFans++;
        }
    }

    let aAverage = (aFans / fans) * 100;
    let bAverage = (bFans / fans) * 100;
    let vAverage = (vFans / fans) * 100;
    let gAverage = (gFans / fans) * 100;
    let average = (fans / capacity) * 100;

    console.log(`${aAverage.toFixed(2)}%`);
    console.log(`${bAverage.toFixed(2)}%`);
    console.log(`${vAverage.toFixed(2)}%`);
    console.log(`${gAverage.toFixed(2)}%`);
    console.log(`${average.toFixed(2)}%`);

}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);