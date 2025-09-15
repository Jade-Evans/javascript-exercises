// const removeFromArray = (array, ...args) => {

//     let newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         };
        

//     });
//     console.log(newArray);
// };
//     removeFromArray([1,2,3,4], "3");
const removeFromArray = function(array,...args){
  const newArray = [];
  array.forEach((item)=>{
    if(!args.includes(item)){
      newArray.push(item);
    }
  });
  return newArray;
};
console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
