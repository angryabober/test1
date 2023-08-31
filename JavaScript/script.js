let age = prompt('введите ваш возраст');

function agecalc(agex) {
    if (agex < 18) {
        alert('школьник')
    }
    else {
        alert('студент')
    }
}

agecalc(age)