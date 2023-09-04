function password(input) {
    let name = input[0];
    let password = input[1];

    let newTry = input[2];
    let index = 3;
    
    while (newTry !== password) {
        newTry = input[index];
        index++;
    }

    console.log(`Welcome ${name}!`);
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);
