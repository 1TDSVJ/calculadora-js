
/*
//Recuperando um elemento HTL com querrySelector(só pega o primeiro elemento)
const titulo1 = document.querrySelector('h1'); //const pois não vai mudar

//Inserindo estilo de background-color no elemento
titulo1.style.backgroundColor = '#ff0000';

//Recuperando todos os elemntos html com querrySelectorAll
const titulos = document.querrySelectorAll('h1');
//Inserindo estilo de background-color em um elemento
titulos[0].style.backgroundColor = '#ff0000';

//Inserindo estilo de background-color em todos os elementos com for OF
for (let titulo of titulos) {
    titulo.style.backgroundColor = '#ff0000';
} */

// *Sempre trabalhar com objetos(arrays, etc), pois pegam menos espaço na memória

//Capturando os inputs e seus respectivos valores
//const inputs = document.getElementsById('input');
const inputs = document.querySelectorAll('#frmCalc input');

//Atrelando evento ao input do formulário com addEventListenner e adicionando o valor ao campo de resultado
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