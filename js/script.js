
//Recuperandoi um elemento html com querySelector
//const titulo = document.querySelector("h1");

//inserindo estilo de backgroud-colar no elemento
//titulo.style.backgroundColor = '#ff0000';

//recuperando todos os elemento html com querySelectorAll
//const titulos = document.querySelectorAll("h1");

//inserindo estilo de backgroud-colar no elemento
//titulos[0].style.backgroundcolor = '#ff0000';

//inserindo estilo de backgroud-colar de todos os elemento com for of
//for(let titulo of titulos){
//    titulo.style.backgroundColor = '#ff0000';
//}

//Capturando os inpouts e seus respectivos valores
//const inputs = document.getElementsById('input');
//const inputs = document.querySelectorAll("input");

//Adicionando background-color ao input
//console.log(inputs.children);

//capturar os inputs e seus respectivos valores
//const inputs = document.querySelectorAll("input");
const inputs = document.querySelectorAll('#frmCalc input');

//Atrelando eventoao input do formulario com addEventlistenner e adicionando o valor ao campo de resultado

inputs[0].addEventListener('focus', function(){
    inputs[0].value = ''
})

inputs[1].addEventListener('click',function(){
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+("1");

})

inputs[2].addEventListener('click',function(){
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+("2");

})

inputs[3].addEventListener('click',function(){
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+("3");

})

inputs[4].addEventListener('click',function(){
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+("4");

})

inputs[5].addEventListener('click',function(){
    let temp = inputs[0].value;
    inputs[0].value = ''
    inputs[0].value += temp+("5");

})
