const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

let empCheck = Math.round(Math.random() * 10) % 3;
let empHrs = 0;
let empWage;

switch(empCheck) {
    case IS_FULLTIME:
        empHrs = FULL_TIME_HRS;
        break;
    case IS_PARTTIME:
        empHrs = PART_TIME_HRS;
        break;
    default:
        empHrs = 0;
}

empWage = empHrs * WAGE_PER_HR;

console.log(`Employee wage is ${empWage}`);
