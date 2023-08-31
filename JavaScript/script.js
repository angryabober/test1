// let age = prompt('введите ваш возраст')
// if (age <= 18) {
//     alert(' школьник')
// }
// else {
//     alert('студент')
// }

// let min = 0;
// let max = 999;
// let count = 10;
// while (count){
//     let num = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(num);
//     count = count - 1;
// }
// console.log('всё')

// let min = 0;
// let max = 999;
// for (let count = 10; count;){
//     let num = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(num);
//     count = count - 1;
// }
// console.log('всё')

// let num1 = Number(prompt('1'));
// let znak = prompt('знак числа');
// let num2 = Number(prompt('2'));
// switch (znak) {
//     case '+':
//         alert(num1 + num2);
//         break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
//     case '/':
//         alert (num1 / num2);
//         break;
//     case '%':
//         alert (num1 % num2);
//         break;
// }

let name = 'bobr'
let age = 23

function show(nameshow,ageshow = undef()){
    console.log(nameshow,ageshow)
}

show(name)

function undef(){
    return 32
}

function sumr(x){
    return x*2
}

let num = sumr(4)
console.log(num)