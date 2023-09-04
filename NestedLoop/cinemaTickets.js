function cinemaTickets(input) {
    let index = 0;
    let movieTitle = input[index];
    index++;

    let totalSeats = 0;
    let student = 0;
    let kid = 0;
    let standard = 0;

    while (movieTitle !== "Finish") {
        let freeSeats = Number(input[index]);
        index++;
        let typeTicket = input[index];
        index++;
        let countSeats = 0;
        while (typeTicket !== "End") {
            countSeats++;
            totalSeats++;
            if (typeTicket === "standard") {
                standard++;
            } else if (typeTicket === "student") {
                student++;
            } else if (typeTicket === "kid") {
                kid++;
            }
            if (countSeats === freeSeats) {
                break;
            }
            typeTicket = input[index];
            index++;
        }

        let PerCent = (countSeats / freeSeats) * 100;
        console.log(`${movieTitle} - ${PerCent.toFixed(2)}% full.`);


        movieTitle = input[index];
        index++;

    }

    console.log(`Total tickets: ${totalSeats}`);
    let PerStudent = student / totalSeats * 100;
    console.log(`${PerStudent.toFixed(2)}% student tickets.`);
    let PerStandard = standard / totalSeats * 100;
    console.log(`${PerStandard.toFixed(2)}% standard tickets.`);
    let PerKid = kid / totalSeats * 100;
    console.log(`${PerKid.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
