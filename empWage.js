const IS_PRESENT = 1;   

let empCheck = Math.round(Math.random() * 10) % 2;

if(empCheck == IS_PRESENT)
    console.log("Employee is present ");
else
    console.log("Employee is absent");