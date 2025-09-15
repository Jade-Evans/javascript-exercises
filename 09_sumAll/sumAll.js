
const sumAll = function(a,b) {
    if(a<0||!Number.isInteger(a)|| b<0 ||!Number.isInteger(b)){
        return ("ERROR");
    }
    if(a>b){
        [a,b]=[b,a];
    }

let total = 0;
for(let i=a; i<=b; i++){
    total +=i;
};
return total;
};

console.log(sumAll(-10,4)) ; 

// Do not edit below this line
module.exports = sumAll;
