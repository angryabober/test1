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

let age = +prompt('age?')

function myFunc(x){
    if (x < 18)return 'школьник'
    else return 'студент'
}

let ageX = myFunc(age)

alert(ageX)