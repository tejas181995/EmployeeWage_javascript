const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORKING_DAYS = 20;

function getEmpHrs(empCheck){
    switch(empCheck) {
    case IS_FULLTIME:
        return FULL_TIME_HRS;
        break;
    case IS_PARTTIME:
        return PART_TIME_HRS;
        break;
    default:
        return 0;
    }
}


let empWage;
let empHrs = 0;

for(let days = 0; days < NO_OF_WORKING_DAYS; days++){
    let empCheck = Math.round(Math.random() * 10) % 3;
    empHrs += getEmpHrs(empCheck); 
}


empWage = empHrs * WAGE_PER_HR;

console.log(`total hours of working ${empHrs} Employee wage is ${empWage}`);
