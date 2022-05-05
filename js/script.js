/*     EXEMPLOS DE UTILIDADES ----------------------------------------------------------------
//Recuperando um elemento HTML com querySelector
const titulo1 = document.querySelector("h1");

//Inserindo estilo de background-color no elemento
//titulo1.style.backgroundColor = "#ff0000";

//Recuperando todos os elemento HTML com querySelector
const titulos = document.querySelectorAll("h1");

//Inserindo estilo de background-color em um elemento
//titulos[0].style.backgroundColor = "#ff0000";

//Inserindo estilo de background-color em todos os elementos com for of
for (let titulo of titulos) {
    titulo.style.backgroundColor = "#ff0000";
    } */

//---------------------------------------------------------------------------------------------

//caputrando os inputs e seus respectivos valores - 2 maneiras diferentes que fazem a mesma coisa
//const inputs = document.getElementById("frmCalc");
const inputs = document.querySelectorAll("#frmCalc input");

/* //Aplicand estilo de background-color em todos os inputs
for (let input of inputs) {
    input.style.backgroundColor = "#ff0000";
}; */

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





