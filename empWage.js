const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

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

let empCheck = Math.round(Math.random() * 10) % 3;
let empWage;
let empHrs = getEmpHrs(empCheck);

empWage = empHrs * WAGE_PER_HR;

console.log(`Employee wage is ${empWage}`);
