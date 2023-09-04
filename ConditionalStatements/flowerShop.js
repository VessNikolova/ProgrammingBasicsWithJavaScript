function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinth = Number(input[1]);
    let rose = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sum = magnolias * 3.25 + hyacinth * 4 + rose * 3.5 + cactus * 8;
    let sumAfter = sum * 0.95;
    if (sumAfter >= giftPrice) {
        console.log(`She is left with ${Math.floor(sumAfter - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - sumAfter)} leva.`);
    }

}

flowerShop(["2", "3", "5", "1", "50"]);