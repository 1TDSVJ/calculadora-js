
// //Recuperando um elemento html com querySelector
// const titulo1 = document.querySelector('h1');

// //Inserindo estilo de backgroud-color no elemento
// titulo1.style.backgroundColor = "#FF0000";

// //Recuperando todos os elemento html com querySelectorAll
// const titulos = document.querySelector('h1')

// //Inserindo estilo de backgroud-color em um elemento
// titulos[0].style.backgroundColor = "#FF0000"

// //Inserindo estilo de backgroud-color em todos os elementos com for of
// for (let titulo of titulos) {
//     titulo.style.backgroundColor = "#FF0000"
// }

// Capturando os inputs e seus respectivos valores
const inputs = document.querySelectorAll('#frmCalc input')

//ATRELANDO EVENTO AO INPUT DO FORMULÁRIO COM addEventListenner E ADICIONANDO O VALOR AO CAMPO DE RESULTADO

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
