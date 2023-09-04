function comission(input){
let city = input[0];
let sold = Number(input[1]);

let perCent = 0;

isValid = (city==="Sofia"&&sold>=0)||(city==="Plovdiv"&&sold>=0)||(city==="Varna"&&sold>=0);


    if (city === "Sofia") {
        if (sold >= 0 && sold <= 500) {
            perCent = 0.05;
        } else if (sold > 500 && sold <= 1000) {
            perCent = 0.07;
        } else if (sold > 1000 && sold <= 10000) {
            perCent = 0.08;
        } else if (sold > 10000) {
            perCent = 0.12;
        } else {
            console.log("error");
        }
    } else if (city === "Varna") {
        if (sold >= 0 && sold <= 500) {
            perCent = 0.045;
        } else if (sold > 500 && sold <= 1000) {
            perCent = 0.075;
        } else if (sold > 1000 && sold <= 10000) {
            perCent = 0.1;
        } else if (sold > 10000) {
            perCent = 0.13;
        } else {
            console.log("error");
        }
    } else if (city === "Plovdiv") {
        if (sold >= 0 && sold <= 500) {
            perCent = 0.055;
        } else if (sold > 500 && sold <= 1000) {
            perCent = 0.08;
        } else if (sold > 1000 && sold <= 10000) {
            perCent = 0.12;
        } else if (sold > 10000) {
            perCent = 0.145;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }

    if(isValid){
        let sum = perCent*sold;
        console.log(sum.toFixed(2));
    }


}

comission(["Bourgas","1500"]);