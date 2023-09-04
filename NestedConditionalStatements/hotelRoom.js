function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0
    let apartment = 0;
    
    if (month === "May" || month === "October") {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            studio = studio * 0.7;
            apartment = apartment * 0.9;
        } else if (nights > 7) {
            studio = studio * 0.95;
        }
    } else if (month === "June" || month === "September") {
        studio = 75.20;
        apartment = 68.7;
        if (nights > 14) {
            studio = studio * 0.8;
            apartment = apartment * 0.9;
        }
    } else if (month === "July" || month === "August") {
        studio = 76;
        apartment = 77;
        if (nights > 14) {
            apartment = apartment * 0.9;
        }
    }
    let priceStudio = studio * nights;
    let priceApartment = apartment * nights;


    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);




}


hotelRoom(["May", "15"]);