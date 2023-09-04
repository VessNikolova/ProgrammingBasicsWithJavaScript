function sleepyCat(input) {
    let offDays = Number(input[0]);

    let workDays = 365 - offDays;
    let playTime = offDays * 127 + workDays * 63;


    if (playTime > 30000) {
        let more = playTime - 30000;
        let hours = Math.trunc(more / 60);
        let minutes = more % 60;
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        let less = 30000 - playTime;
        let hours = Math.trunc(less / 60);
        let minutes = less % 60;
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }


}

sleepyCat(["20"]);