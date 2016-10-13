// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Thieu', 'Lam', 'Khang'];
// var groupB = ['Hung'];
// var final = [...groupB, 3, ...groupA];
// console.log(final);

var person = ['Quyen', 20];
var person2 = ['Nam', 10];

function greetPerson(name, age) {
    return `Hi ${name}, You are ${age}`;
}

console.log(greetPerson(...person));
console.log(greetPerson(...person2));

var name = ['Thieu', 'Lam', 'Khang'];
var final = ['Quyen', ...name];

final.forEach((name) => {
    console.log("Hi " + name);
});

