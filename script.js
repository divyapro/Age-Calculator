let userInput = document.getElementById("date");
userInput.max= new Date().toISOString().split("T")[0]; //allows to select date today or previous dates

let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value); //user input value will be stored in this variable
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1; //+1 because the months start from 0 (0-Jan)
    let y1 = birthDate.getFullYear();

    let today = new Date(); //returns the current date
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3,m3,y3;
    
    y3 = y2-y1;
    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--; //will decrement the yr
        m3 = 12+m2-m1; // add 12 with today's month and subtract DOB month
    }
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--; //
        d3 = getDaysInMonth(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old !`

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate(); //returns the last date of the month
}