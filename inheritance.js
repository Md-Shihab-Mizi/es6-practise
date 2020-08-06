// class Parent {
//     constructor(){
//         this.fatherName = "Upcoming"
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;

//     }
// }
// const baby = new Child("Sifa");
// const baby2 = new Child("Safi");
// console.log(baby);
// console.log(baby2);




// using function

class Parent {
    constructor(){
        this.fatherName = "Upcoming"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
}
const baby = new Child("Sifa");
const baby2 = new Child("Safi");
console.log(baby.getFullName());
console.log(baby2);