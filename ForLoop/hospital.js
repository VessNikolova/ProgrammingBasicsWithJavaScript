function hospital(input) {
    let period = Number(input[0]);

    let treated = 0;
    let untreated = 0;
    let doctors = 7;


    for (let i = 1; i <= period; i++) {
        let patients = Number(input[i]);

        if (i % 3 == 0) {
            if (untreated > treated) {
                doctors++;
            }
        }
        if (patients >= doctors) {
            treated += doctors;
            untreated += patients - doctors;
        } else {
            treated += patients;
        }



    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);