// rules 1

// function add(num1, num2){
//    if(num2 == undefined){
//        num2 = 20;
//    }
//       return num1+num2;
//   }
//   const total = add(10);
//   console.log(total);


// rules 2

// function add(num1, num2){
//   num2 = num2 || 15;
//     return num1+num2;
// }
// const total = add(10);
// console.log(total);


// es6 rules

function add(num1, num2 =0){
    return num1+num2;
}
const total = add(10);
console.log(total);