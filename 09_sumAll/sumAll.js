const sumAll = function(a,b) {
    if (a <0 || b<0 || a%1 !== 0 || b%1 !==0 || typeof a !=="number" || typeof b !=="number"){
    
        return "ERROR";
    }
    
    if(a > b){
        [a,b] = [b,a];
    }
    let finalSum = 0;
    for (let i = a; i <=b; i++){
        finalSum += i;
        
    }
    
return finalSum;
   

};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
