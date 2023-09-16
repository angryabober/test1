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

// let user = {
//     name: "John",
//     age: 30,
// };
// alert( user.name );
// user.name = "Alice";
// alert( user.name )
// let key = prompt('что вы хотите узнать');
// alert( user[key] );

let sruser = {
    name: "bober",
    status: "beaver",
};
const obj2 = sruser;
alert( obj2.status );

let arr = Object.values(sruser)
console.log(arr.length)
alert(arr)