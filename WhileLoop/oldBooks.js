function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let currentBook = input[index];
    index++;
    let count = 0;

    while (currentBook !== favouriteBook) {
        currentBook = input[index];
        index++;
        count++;

        if (currentBook === "No More Books") {
            break;
        }
    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);

    } else {
        console.log(`You checked ${count} books and found it.`);
    }

}

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);

