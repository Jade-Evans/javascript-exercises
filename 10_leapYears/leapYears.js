const leapYears = function(year) {
    let isLeapYear;
    if (year%4 !== 0){
        isLeapYear = false;
    }
    else if (year%100 ===0 && year%400===0){
        isLeapYear = true;
    }
    else if (year%100===0){
        isLeapYear = false;
    }
    else  isLeapYear = true;
    return isLeapYear;
};



// Do not edit below this line
module.exports = leapYears;
