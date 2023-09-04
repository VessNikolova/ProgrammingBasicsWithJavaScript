function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let randomNum = Number(input[index]);
    index++;

    let sum = 0;
    
    while (sum < num) {
        sum += randomNum;
        randomNum = Number(input[index]);
        index++;
    }

    console.log(sum);
}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);

//let num = Number(input[0]);
//let randomNum = Number(input[1]);
//let index=2;
//let sum=0;
//while(sum<num){
//    sum+=randomNum;
 //   randomNum = Number(input[index]);
 //   index++;
//}
//console.log(sum);
//}