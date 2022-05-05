/* Recuperando um único elemento html com querySelector

const titulo = document.querySelector('h1');

Inserindo estilo de bg color no elemento
titulo.style.backgroundColor = '#ff0000';
 
Recuperando todos os elementos html com querySelectorAll
const titulos = document.querySelectorAll('h1');

Inserindo estilo de background em um elemento
titulos[0].style.backgroundColor = '#ff0000'

Inserindo estilo de background-color em todos os elementos com for of
for(let titulo of titulos){
    titulo.style.backgroundColor = '#ff0000'
}
*/

// Capturando os inputs e seus respectivos valores
// *const inputs = document.getElementsByTagName('input').elements; -> (método antigo, muito complexo)
const inputs = document.querySelectorAll('#frmCalc input');

// *Atrelando evento ao input do formulário e adicionando o valor ao campo de resultado

inputs[0].addEventListener('focus', function (){
    inputs[0].value = '';
})

inputs[1].addEventListener('click', function() {
    let temp = inputs[0].value;
    inputs[0].value = '';
    inputs[0].value += temp+('1');
})

inputs[2].addEventListener('click', function(){
    let temp = inputs[0].value;
    inputs[0].value = '';
    inputs[0].value += temp+('2')
})

inputs[3].addEventListener('click', function(){
    let temp = inputs[0].value;
    inputs[0].value = '';
    inputs[0].value += temp+('3')
})

inputs[4].addEventListener('click', function(){
    let temp = inputs[0].value;
    inputs[0].value = '';
    inputs[0].value += temp+('4')
})

inputs[5].addEventListener('click', function(){
    let temp = inputs[0].value;
    inputs[0].value = '';
    inputs[0].value += temp+('5')
})

