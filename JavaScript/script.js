// let age = prompt('введите ваш возраст');

// function agecalc(agex) {
//     if (agex < 18) {
//         alert('школьник')
//     }
//     else {
//         alert('студент')
//     }
// }

// agecalc(age)

// let age = +prompt('age?')

// function myFunc(x){
//     if (x < 18)return 'школьник'
//     else return 'студент'
// }

// let ageX = myFunc(age)

// alert(ageX)

// let a = prompt('1');
// let b = prompt('2');
// function bobr(x,y){
//     if (x > y) {
//         return y;
//     }
//     if (x < y) {
//         return x;
//     }
// }

// bobr(a,b);

// let sruser = {
//     name: "bober",
//     status: "beaver",
// };
// const obj2 = sruser;
// alert( obj2.status );

// let arr = Object.values(sruser)
// console.log(arr.length)
// alert(arr)

let user = {
    name: "john",
    age: "37",
};
alert(user.name);
user.name = "Alice";
alert(user.name);
delete user.name;
alert('age' in user);

let person = {
    name: "bober",
    age: "1289",
    city: "muhosransk",
};
let ar2 = Object.values(person)
alert(ar2)
alert(Object.keys(person).length);

let personCopy = person;
let percon = {person, personCopy};

alert(percon.age)