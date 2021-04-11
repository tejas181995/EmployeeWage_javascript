const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

let empWage;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empHrs = 0;

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

function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HR;
}

while (totalWorkingDays < NO_OF_WORKING_DAYS && TotalEmpHrs <= MAX_WORKING_HRS){
    totalWorkingDays++;
    let empCheck = Math.round(Math.random() * 10) % 3;
    empHrs = getEmpHrs(empCheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
 
}

empWage = calculateDailyWage(TotalEmpHrs);

console.log(`total woorking days ${totalWorkingDays} total hours of working ${TotalEmpHrs} Employee wage is ${empWage}`);
console.log(empDailyWageArr);
