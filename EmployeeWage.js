//Hello Welcome to EmployeeWage Management project in JavaScript

///EmployeeWage Class
let EmployeeWage =
{
    //UC2 DailyWage Calculation based on Part Time or Full Time
    IS_FULLTIME:2,
    IS_PARTTIME:1,
    PARTTIME_HOURS:4,
    FULLTIME_HOURS:8,
    WAGE_PERHOUR:20,
    //UC4 Monthly Wage Calculation
     MAX_WORK_HRS:160,
     MAX_WORK_DAYS: 20,

    //UC6 Add daily wages to array
     empDailyWageArray : new Array(),

    //UC8 Store day and daily wage along with TotalWage
     TotalWageDailyWageMap : new Map(),

     empDailyHrsandWageArray : new Array(),
};


function  getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case EmployeeWage.IS_PARTTIME :
                return EmployeeWage.PARTTIME_HOURS;
            
            case EmployeeWage.IS_FULLTIME :
                return EmployeeWage.FULLTIME_HOURS;
                
            default:
                return 0;
        }
    }

function CalculateDailyWage(empHrs)
    {
        let empWage = empHrs*EmployeeWage.WAGE_PERHOUR;
        return empWage;
    }



//UC1 CheckAbsence
const IS_ABSENT =0;
let empCheck = Math.floor(Math.random()*10) %2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
}
else{
    console.log("Employee is present");
}


let totalEmpHrs =0;
let totalWorkingDays =0;
//const WORKING_DAYS = 5;
while(totalEmpHrs <= EmployeeWage.MAX_WORK_HRS && totalWorkingDays<= EmployeeWage.MAX_WORK_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) % 3;
    let empHrs = getWorkingHours(empCheck);
    EmployeeWage.empDailyWageArray.push(CalculateDailyWage(empHrs));
    totalEmpHrs += empHrs;
    EmployeeWage.TotalWageDailyWageMap.set(totalWorkingDays, CalculateDailyWage(empHrs));
    
    EmployeeWage.empDailyHrsandWageArray.push
    (
        {
            day : totalWorkingDays,
            dailyHours : empHrs,
            dailyWage : CalculateDailyWage(empHrs),
            /*toString()
            {
                return("\nDay: "+this.day+"   Working Hours: "+this.dailyHours+"  TotalWage: "+this.dailyWage);
            }*/
        }
    );
}

let totalEmpWage = CalculateDailyWage(totalEmpHrs);
console.log("Total Emp Wage = "+totalEmpWage +" Total Working Days: "+(totalWorkingDays-1)+
        " Total Hrs: "+totalEmpHrs);

console.log(EmployeeWage.empDailyHrsandWageArray);


//UC7.1 Calculate Total Wage using DailWageArray
//sum function using arrow function
let totalWagefromArray=0;
                /*function sum(dailyWage)
                {
                    totalWagefromArray += dailyWage;
                }*/
EmployeeWage.empDailyWageArray.forEach(function(dailyWage){totalWagefromArray += dailyWage});
console.log("Total Wage from Array Helper Function "+totalWagefromArray);

//reduce function using Arrow Function
                /*function totalWages(totalWage,dailyWage)
                {
                    return totalWage+dailyWage;
                }*/
console.log("Using reduce functions "+EmployeeWage.empDailyWageArray.reduce(function(totalWage, dailyWage){ return totalWage+dailyWage},0));


//UC7.2 Mapping Day to DailyWage
let dayCount=0;
                /*function dailyWageMapping(dailyWage)
                {
                    return((++dayCount) + " = "+dailyWage);
                }*/
let MappedDailyWage = EmployeeWage.empDailyWageArray.map(function(dailyWage){return ((++dayCount) + " = "+dailyWage)});
console.log("Day wise Wage : ");
console.log(MappedDailyWage);


//UC7.3 Days when full time wage is 160
                /*function fullTimeWage(dailyWage)
                {
                    return dailyWage.includes("160");
                }*/
let fullWageDays= MappedDailyWage.filter(function(dailyWage){ return dailyWage.includes("160")});
console.log("Full Wage Days : ");
console.log(fullWageDays);


//UC7.4 First occurence of Full time wage in the array
console.log("First occurence of full time wage: "+MappedDailyWage.find(function(dailyWage){ return dailyWage.includes("160")}));


//UC7.5 Check If all elements of FullWagedDays array contains full time wage
console.log("Does all elements of FullWagedDays array contains full time wage :" +fullWageDays.every(function(dailyWage){ return dailyWage.includes("160")}));


//UC7.6 Check if there is any part time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Is there any part time wage in FullWageDays Array : "+ fullWageDays.some(isAnyPartTimeWage));
console.log ("Is there any part time wage in MappedDailyWage Array : "+ MappedDailyWage.some(isAnyPartTimeWage));


//UC7.7 Find number of working days using ArrayHelper Function
function FindWorkingDays(numberOfDays, dailyWage)
{
    if(dailyWage>0)
        return (numberOfDays+1);
    
    return numberOfDays;
}
let numberOfDays=0;
//let FindWorkingDays(dailyWage) => {(dailyWage>0) ? return(numberOfDays+1) : return(numberOfDays);}
console.log("Employee Worked for "+EmployeeWage.empDailyWageArray.reduce(FindWorkingDays,0)+" days");

console.log(EmployeeWage.TotalWageDailyWageMap);
//Computing total wage using map
console.log("Total wage of Employee is : "+ Array.from(EmployeeWage.TotalWageDailyWageMap.values()).reduce(function(totalWage, dailyWage){ return totalWage+dailyWage},0));

