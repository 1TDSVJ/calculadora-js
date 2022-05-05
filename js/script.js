/*

//Recuperando um único elemento html com querySelector
const titulo1 = document.querySelector('h1');

//Inserindo estilo no elemento
titulo1.style.backgroundColor = '#ff0000';

//Recuperando todos os elementos com querySelector
const titulos = document.querySelectorAll('h1');

//Inserindo backgroundcolor em um elemento
titulos[0].style.backgroundColor = '#ff0000';

//Inserindo estilo de backgroundcolor em todos os elementos com FOR OF
for (let titulo of titulos) {
    titulo.style.backgroundColor = '#ff0000';
}

*/

//Capturando os inputs e seus respectivos valores
const inputs = document.querySelectorAll('#frmCalc input');

//Atrelando evento ao input do formulario com addEventListenner e adicionando valor ao campo de resultado
inputs[0].addEventListener('focus', function () {
    inputs[0].value = ''
})

inputs[1].addEventListener('click', function () {
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+('1');
})

inputs[2].addEventListener('click', function () {
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+('2');
})

inputs[3].addEventListener('click', function () {
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+('3');
})

inputs[4].addEventListener('click', function () {
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+('4');
})

inputs[5].addEventListener('click', function () {
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+('5');
})
