const convertToCelsius = function(x) {
  let celsius = (x - 32)*(5/9);
  if(celsius%1===0){
    return Math.floor(celsius)
    }
  else{
    return Number(celsius.toFixed(1));}
};

const convertToFahrenheit = function(y) {
  let faren = (y*(9/5))+32;
  if(faren%1===0){
    return Math.floor(faren)
    }
  else{
    return Number(faren.toFixed(1));
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
