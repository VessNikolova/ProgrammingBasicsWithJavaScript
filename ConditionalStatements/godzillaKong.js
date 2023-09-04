function godzillaKong(input) {
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let uniform = Number(input[2]);

    let decoration = budget * 0.1;
    if (statist > 150) {
        uniform = uniform * 0.9;
    }

    let sumUniform = statist * uniform;
    let sum = sumUniform + decoration;

    if (sum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }

}

godzillaKong(["20000", "120", "55.5"]);
