function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let studentHour = Number(input[2]);
    let studentMinute = Number(input[3]);

    let examAll = examHour * 60 + examMinute;
    let studentAll = studentHour * 60 + studentMinute;
    let diff =examAll - studentAll;

    if (diff == 0) {
        console.log("On time");
    } else if (diff > 0 && diff <= 30) {
        console.log("On time");
        console.log(`${Math.abs(diff)} minutes before the start`);
    } else if (diff < 0) {
        diff=Math.abs(diff);
        console.log("Late");
        if (diff >= 60) {
            let hour = Math.trunc(diff / 60);
            let minutes = diff % 60;
            if(minutes<10){
                console.log(`${hour}:0${minutes} hours after the start`);
            }else{
                console.log(`${hour}:${minutes} hours after the start`);
            }
            
        } else {
            console.log(`${diff} minutes after the start`);
        }
    } else {
        console.log("Early");
        if (diff >= 60) {
            let hour = Math.trunc(diff / 60);
            let minutes = diff % 60;
            if(minutes<10){
                console.log(`${hour}:0${minutes} hours before the start`);  
            }else{
                console.log(`${hour}:${minutes} hours before the start`);
            }
            
        } else {
            console.log(`${diff} minutes before the start`);
        }

    }
}

onTimeForExam(["16", "00", "15", "00"]);