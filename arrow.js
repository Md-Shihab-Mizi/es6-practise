// rules 1

// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);


// rules 2

// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);


// rules 3 => ES - 6

// const doubleIt = num => num*2;
// const result = doubleIt(20);
// console.log(result);


// rules 4 => ES - 6 jodi ekadhik parameter thake

// const add = (x ,y) => x + y;
// const result = add(10, 50);
// console.log(result);


// rules 5 => ES - 6 jodi kono para meter na thake

// const give5 = () => 5;
// const result = give5();
// console.log(result);



// rules 6 => ES - 6 jodi para meter er modhe onek kaj korte chai


const doMath = (x , y) => {
    const sum = x + y;
    const different = x - y;
    const result = sum * different;
    return result;
}
const result = doMath(20 ,10);
console.log(result);